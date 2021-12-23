exports.seed = async function (knex) {
  await knex('users')
    .insert([
      {
        username: 'lambda',
        password: '$2a$08$CjOzAqkUXePlNyZCG6TKuubIY.MpjKqOdrV/W3178ah483kyEbeSe'
      },
      {
        username: 'bloomtech',
        password: '$2a$08$CjOzAqkUXePlNyZCG6TKuubIY.MpjKqOdrV/W3178ah483kyEbeSe'
      }
    ])
}