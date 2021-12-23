exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (users) => {
        users.increments('user_id')
        users.string('username', 200).notNullable().unique()
        users.string('password', 200).notNullable()
      })
      .createTable('products', (products) => {
          products.increments('product_id')
          products.string('product_name', 200).notNullable()
          products.string('description', 200)
          products.integer('price')
          products.string('location')
          products.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('users')
  }