
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {city: 'Boulder'},
        {city: 'Denver'},
        {city: 'Portland'},
        {city: 'San Francisco'}
      ]);
    });
};
