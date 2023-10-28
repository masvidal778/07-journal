import {shallowMount} from "@vue/test-utils";
import { createStore } from "vuex";

import Swal from 'sweetalert2'

import journal from "@/modules/daybook/store/journal";
import EntryView from "@/modules/daybook/views/EntryView.vue";
import { journalState } from "../../../mock-data/test-journal-state";

const createVuexStore = ( initialState ) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('Testing EntryView', () => {

    const store = createVuexStore( journalState )
    store.dispatch = jest.fn()

    const mockRouter = {
        push: jest.fn()
    }

    let wrapper

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount( EntryView, {
            props: {
                id: 'ABC123'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        } )
    })

    test("should to disconnect user because id doesn't exist", () => {

        const wrapper = shallowMount( EntryView, {
            props: {
                id: "This ID doesn't exist on the store"
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        } )

        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })

    })

    test("entry should be showed correctly", () => {

        expect( wrapper.html() ).toMatchSnapshot()
        expect( mockRouter.push ).not.toHaveBeenCalled()

    })

    test('should erase entry', (done) => {

        Swal.fire.mockReturnValueOnce(Promise.resolve({isConfirmed: true}))

        wrapper.find('.btn-danger').trigger('click')

        expect(Swal.fire).toHaveBeenCalledWith({
            title: "Està segur que vol esborrar l'entrada?",
            text: "Un cop esborrada, no es podrà recuperar",
            showDenyButton: true,
            confirmButtonText: "Sí, vull esborrar l'entrada"
        })

        setTimeout( () => {
            expect( store.dispatch).toHaveBeenCalledWith("journal/deleteEntries", "ABC123")
            expect( mockRouter.push ).toHaveBeenCalled()
            done()
        }, 1)

    })

})