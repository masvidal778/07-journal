import {shallowMount} from "@vue/test-utils";
import { createStore } from "vuex";

import journal from "@/modules/daybook/store/journal";
import EntryList from "@/modules/daybook/components/EntryList.vue";
import { journalState } from "../../../mock-data/test-journal-state";

const createVuexStore = ( initialState ) =>
    createStore({
        modules: {
            journal: {
                //desestructurem journal per sobreescriure l'state amb el que es tingui a initialState
                ...journal,
                state: {...initialState}
            }
        }
    })

describe('Testing EntryList', () => {

    const store = createVuexStore( journalState )
    const mockRouter = {
        push: jest.fn()
    }
    const wrapper = shallowMount( EntryList, {
        global: {
            mocks: {
                $router: mockRouter
            },
            plugins: [ store ]
        }
    } )


    test('should call getEntriesByTerm and show 2 entries', () => {

        expect( wrapper.findAll('entry-stub').length ).toBe(2)
        expect( wrapper.html()).toMatchSnapshot()

    })
})