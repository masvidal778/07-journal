import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";;

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

    test('this is the initial state, it should have to this state', () => {

        //Es crea un vuex store per treballar amb les proves
        const store = createVuexStore(journalState)
        const {isLoading, entries} = (store.state.journal)

        expect(isLoading).toBeFalsy
        expect(entries).toEqual(journalState.entries)
    })

    //Mutations
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

        //entries.length = 2
        expect(store.state.journal.entries.length).toBe(2)
        //entries tiene que existir el updatedEntry toEqual
        expect(
            store.state.journal.entries.find( e => e.id === updatedEntry.id)
            ).toEqual(updatedEntry)

    })

})