import { shallowMount } from "@vue/test-utils";
import IndividualEntry from "@/modules/daybook/components/IndividualEntry.vue";
import { journalState } from "../../../mock-data/test-journal-state";

describe('Testing individualEntry Component', () => {

    //mockRouter
    const mockRouter = {
        push: jest.fn()
    }

    //const wrapper = shallowMount ( entry, { props... global... } )
    const wrapper = shallowMount( IndividualEntry, {
        props: {
            entry: journalState.entries[0]
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    })

    test('should match snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('if click to entry-container should redirect to', () => {

        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')

        expect(mockRouter.push).toHaveBeenCalledWith(
            {
                name: 'entry',
                params: {
                    id: journalState.entries[0].id
                }
            }
        )

    })

    test('testing computed properties', () => {

        // wrapper.vm <------ computed properties
        // day: 18
        // month: Juliol
        // yearDay: '2021, Diumenge'
        expect(wrapper.vm.day).toBe(18)
        expect(wrapper.vm.month).toBe('Juliol')
        expect(wrapper.vm.yearDay).toBe('2021, Diumenge')

    })

})