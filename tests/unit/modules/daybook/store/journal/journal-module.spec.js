import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";
import {addEntry} from "@/modules/daybook/store/journal/mutations";

;

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                //desestructurem journal per sobreescriure l'state amb el que es tingui a initialState
                ...journal,
                state: {...initialState}
            }
        }
    })

describe('Vuex, testing journal module', () => {

    //Basic =====================
    test('this is the initial state, it should have to this state', () => {

        //Es crea un vuex store per treballar amb les proves
        const store = createVuexStore(journalState)
        const {isLoading, entries} = (store.state.journal)

        expect(isLoading).toBeFalsy
        expect(entries).toEqual(journalState.entries)
    })

    //Mutations =====================
    test('mutation: setEntries', () => {

        const store = createVuexStore({isLoading: true, entries: []})

        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()

    })

    test('mutation: updateEntry', () => {

        //create store con entries
        const store = createVuexStore( journalState )

        //updatedEntry
        const updatedEntry = {
            id: 'ABC123',
            date: "Sun Jul 18 2021",
            text: 'Hola, món! Des de les proves',
            picture: "https://res.cloudinary.com/dqkxcuput/image/upload/v1697048344/wibhrg2otqmhoqdcg3kc.jpg"
        }

        //commit de la mutació
        store.commit('journal/updateEntry', updatedEntry)

        const storeEntries = store.state.journal.entries

        //entries.length = 2
        expect(storeEntries.length).toBe(2)
        //entries tiene que existir el updatedEntry toEqual
        expect(
            storeEntries.find( e => e.id === updatedEntry.id)
            ).toEqual(updatedEntry)

    })

    test('mutation: addEntry and deleteEntry', () => {

        //create store
        const store = createVuexStore( journalState )

        //commit addEntry { id: 'ABC-123', text: 'Hola, món!' }
        store.commit('journal/addEntry', {
            id: 'ABC-123',
            text: 'Hola, món!'
        })

        const storeEntries = store.state.journal.entries

        //Expects
        //entrades siguin 3
        expect(storeEntries.length).toBe(3)
        //entrada amb id ABC-123 existeix
        expect(storeEntries.find( e => e.id === 'ABC-123' ).id).toBe('ABC-123')

        //deleteEntry, 'ABC-123'
        store.commit('journal/deleteEntry', 'ABC-123')

        //Expects
        //entries 2
        expect(store.state.journal.entries.length).toBe(2)
        //entry 'ABC-123' no ha d'existir
        expect(store.state.journal.entries.find( e => e.id === 'ABC-123' )).toBeFalsy()

    })

    //Getters =====================
    test('getters: getEntriesByTerm and getEntryById', () => {

        const store = createVuexStore( journalState )

        const [ entry1, entry2 ] = journalState.entries

        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(2)
        expect( store.getters['journal/getEntriesByTerm']('et').length ).toBe(1)

        expect( store.getters['journal/getEntriesByTerm']('et') ).toEqual([ entry2 ])


        //getEntryById
        //cridar id de l'entry 1
        expect( store.getters['journal/getEntryById']('ABC123') ).toEqual( entry1 )

    })


    //Actions =====================
    test('actions: loadEntries', async () => {

        const store = createVuexStore({ isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')

        expect( store.state.journal.entries.length ).toBe(2)

    })

    test('actions: updateEntries', async () => {

        const store = createVuexStore( journalState )

        const updatedEntry = {
            id: 'ABC123',
            date: "Sun Jul 18 2021",
            text: 'Aliquam tristique erat massa, at commodo mauris vulputate vel. Aenean ut tincidunt magna, quis bibendum risus. Etiam dignissim, ipsum vitae accumsan vestibulum, ante velit consectetur est, quis scelerisque enim libero vel massa',
            otherField: true,
            other: { a: 1 }
        }

        await store.dispatch('journal/updateEntries', updatedEntry)

        expect( store.state.journal.entries.length ).toBe(2)
        expect(
            store.state.journal.entries.find( e => e.id === updatedEntry.id)
        ).toEqual( {
            id: 'ABC123',
            date: "Sun Jul 18 2021",
            text: 'Aliquam tristique erat massa, at commodo mauris vulputate vel. Aenean ut tincidunt magna, quis bibendum risus. Etiam dignissim, ipsum vitae accumsan vestibulum, ante velit consectetur est, quis scelerisque enim libero vel massa',
        } )

    })

})