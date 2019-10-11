
exports.up = function(knex) {
    return knex.schema.createTable('subscribers', (table) => {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('password')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE subscribers')
  };
  