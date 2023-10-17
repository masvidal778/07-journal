import daybookRouter from '@/modules/daybook/router'

describe('testing router module/daybook', () => {

    test('router should to have this configuration', () => {

        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function )
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function )
                },
            ]
        })

    })

})