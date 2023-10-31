import HomeView from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe("proves al Home View", () => {

    test("Renderitza correctament el component", () => {

        const wrapper  = shallowMount( HomeView )
        expect( wrapper.html() ).toMatchSnapshot()

    })

    test("Fer click en un botó ha de redirigir a no-entry", () => {

        const mockRouter = {
            push: jest.fn() //funció de jest, per saber si ha estat cridat
        }

        const wrapper = shallowMount( HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry'})

    })
})