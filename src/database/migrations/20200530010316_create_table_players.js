
exports.up = function(knex) {
    return knex.schema.createTable('players', function(table){
        table.increments('id')
        table.text('nickname').unique().notNullable()
        table.text('email').unique().notNullable()
        table.text('password').notNullable()
        table.integer('score').defaultTo(0)
        table.integer('maxScore').defaultTo(0)
        table.integer('nOfMatches').defaultTo(0)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('players')
  };
  