exports.seed = function (knex, Promise) {
    return knex('products').insert([
        {
            product_name: 'eggs',
            price: 5,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 1
        },
        {
            product_name: 'beef',
            price: 12,
            location: 'Central Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 1
        },
        {
            product_name: 'beans',
            price: 3,
            location: 'North Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 1
        },
        {
            product_name: 'pineapple',
            price: 5,
            location: 'Central Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 1
        },
        {
            product_name: 'Kale',
            price: 4,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 2
        },
        {
            product_name: 'sunflowers',
            price: 6,
            location: 'North Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 2
        },
        {
            product_name: 'chillies',
            price: 3,
            location: 'South Africa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            user_id: 2
        }
    ])
}