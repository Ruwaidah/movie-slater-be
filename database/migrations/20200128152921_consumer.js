exports.up = function (knex) {
  return knex.schema.createTable("consumer", tbl => {
    tbl.increments();
    tbl
      .string("username", 255)
      .notNullable()
      .unique();
    tbl
      .string("image", 255)
    tbl
      .string("email", 255)
      .notNullable()
      .unique();
    tbl.string("password", 255).notNullable();
    tbl
      .integer("zipcode", 255)
  })
    .createTable("owner", tbl => {
      tbl.increments();
      tbl
        .string("email", 255)
        .notNullable()
        .unique();
      tbl.string("password", 255).notNullable();
      tbl
        .string("username", 255)
        .notNullable()
        .unique();

    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("consumer")
    .dropTableIfExists("owner");
};
