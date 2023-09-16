//És reactiu. Quan canvia es notifica a tots els components que
//observen quan es canvia l'state'

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //122348983
            date: new Date().toDateString(), //sat 23, julio...
            text: 'Aliquam tristique erat massa, at commodo mauris vulputate vel. Aenean ut tincidunt magna, quis bibendum risus. Etiam dignissim, ipsum vitae accumsan vestibulum, ante velit consectetur est, quis scelerisque enim libero vel massa',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 1000, //122348983
            date: new Date().toDateString(), //sat 23, julio...
            text: 'Pellentesque sed neque quis nisi tincidunt mattis. Donec dictum euismod posuere. Phasellus ornare et nisl nec egestas. Maecenas ac lacinia leo.',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 2000, //122348983
            date: new Date().toDateString(), //sat 23, julio...
            text: 'Vivamus ut eleifend magna, in porttitor arcu. Sed eu fermentum turpis, feugiat volutpat nulla. Nunc vitae purus malesuada, venenatis arcu vitae, condimentum lectus. In quis ligula at metus ornare viverra nec eu augue.',
            picture: null, //https://
        },
        
    ]
})