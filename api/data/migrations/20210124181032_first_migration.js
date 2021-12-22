exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (users) => {
        users.increments('userId')
        users.string('username', 200).notNullable().unique()
        users.string('firstName', 200).notNullable()
        users.string('lastName', 200).notNullable()
        users.string('businessName', 200)
        users.string('jobTitle', 200)
        users.string('location', 200)
        users.binary('avatarImg', 200)
        users.string('password', 200).notNullable()
      })
      .createTable('products', (products) => {
          products.increments('productId')
          products.string('productName', 200).notNullable()
          products.string('description', 200)
          products.integer('productPrice')
          products.string('location')
          products.integer('userId')
            .unsigned()
            .notNullable()
            .references('userId')
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