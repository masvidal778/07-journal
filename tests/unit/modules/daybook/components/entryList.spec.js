import {shallowMount} from "@vue/test-utils";
import { createStore } from "vuex";

import EntryList from "@/modules/daybook/components/EntryList.vue";
import { getEntriesByTerm } from "@/modules/daybook/store/journal/getters";
import { journalState } from "../../../mock-data/test-journal-state";


describe('Testing EntryList', () => {

    const journalMockModule = {
        namespaced: true,
        getters: {
            getEntriesByTerm
        },
        state: () => ({
            isLoading: false,
            entries: journalState.entries
        })
    }

    const store = createStore({
        modules: {
            journal: { ...journalMockModule }
        }
    })

    const wrapper = shallowMount( EntryList, {
        global: {
            mocks: {
                //TODO $router:
            },
            plugins: [ store ]
        }
    } )


    test('should call getEntriesByTerm and show 2 entries', () => {

        console.log(wrapper.html())

    })
})