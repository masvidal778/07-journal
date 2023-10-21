import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";

const createVuexStore = ( initialState ) =>
    createStore({
        modules: {
            journal: {
                //desestructurem journal per sobreescriure l'state amb el que es tingui a initialState
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex, testing journal module', () => {

    test('this is the initial state, it should have to this state', () => {

        //Es crea un vuex store per treballar amb les proves
        const store = createVuexStore( journalState )
        const { isLoading, entries } = ( store.state.journal )

        expect( isLoading ).toBeFalsy
        expect( entries ).toEqual( journalState.entries )
    })

    //Mutations
    test('Mutations: setEntries', () => {

        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit('journal/setEntries', journalState.entries )

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()

    })

    test('', () => {

    })

})