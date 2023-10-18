import daybookRouter from '@/modules/daybook/router'

describe('testing router module/daybook', () => {

    test('router should to have this configuration', async () => {

        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function)
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                },
            ]
        })


        //expect((await daybookRouter.children[0].component()).default.name ).toBe('NoEntrySelected')
        //expect((await daybookRouter.children[1].component()).default.name ).toBe('EntryView')
        const promiseRoutes = []
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component()))

        //Promise.all() executa totes les promeses definides a l'array
        const routes = (await Promise.all(promiseRoutes)).map(r => r.default.name)

        expect(routes).toContain('EntryView')
        expect(routes).toContain('NoEntrySelected')

    })

})