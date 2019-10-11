
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subscribers').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscribers').insert([
        {
          firstName: 'Bonny',
          lastName: 'Raitt',
          email: 'b.raitt@gmail.com',
          password: 'lOveLettEr',
        },
        {
          firstName: 'Dan',
          lastName: 'Aykroyd',
          email: 'd.aykroyd@gmail.com',
          password: 'goHstbUsters',
        },
        {
          firstName: 'John',
          lastName: 'Candy',
          email: 'j.candy@gmail.com',
          password: 'UnCleBuCk',
        }
      ]);
    });
};
