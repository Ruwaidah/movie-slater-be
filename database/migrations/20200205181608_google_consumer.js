exports.up = function(knex) {
  return knex.schema.createTable("oauth_consumer", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl
      .string("email", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("oauth_consumer");
};
