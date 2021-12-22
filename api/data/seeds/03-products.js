exports.seed = function (knex, Promise) {
    return knex('products').insert([
        {
            productName: 'eggs',
            productPrice: 5,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'beef',
            productPrice: 12,
            location: 'Central Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'beans',
            productPrice: 3,
            location: 'North Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'pineapple',
            productPrice: 5,
            location: 'Central Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'Kale',
            productPrice: 4,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'sunflowers',
            productPrice: 6,
            location: 'North Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        },
        {
            productName: 'chillies',
            productPrice: 3,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            userId: 1
        }
    ])
}