import FabNew from "@/modules/daybook/components/FabNew.vue";
import { shallowMount } from "@vue/test-utils";

describe('Testing FabNew Component', () => {

    test('should show the default icon', () => {

        const wrapper = shallowMount( FabNew )
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-plus') ).toBeTruthy()
    })

    test('should show the icon by argument', () => {

        const wrapper = shallowMount( FabNew, {
            props: {
                icon: 'fa-circle'
            }
        } )
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-circle') ).toBeTruthy()

    })

    test('should to emit the event on:click when the button is clicked', () => {

        const wrapper = shallowMount( FabNew )

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)

    })

})