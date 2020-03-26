exports.up = function(knex) {
    return knex.schema
    .createTable('cities', tbl => {
        tbl.increment();

        tbl
        .string('city', 128)
        .notNullable()
        .unique();
    });
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('cities');
};  