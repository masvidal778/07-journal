import AboutView from "@/views/AboutView.vue";
import { shallowMount } from "@vue/test-utils";

describe("proves a l'About View", () => {

    test("Renderitza correctament el component", () => {
        const wrapper  = shallowMount(AboutView)
        expect( wrapper.html() ).toMatchSnapshot()
    })
})