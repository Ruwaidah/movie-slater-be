exports.seed = function(knex) {
  const bcrypt = require("bcryptjs");

  exports.seed = function(knex) {
    return knex("consumer").then(function() {
      return knex("consumer").insert([
        {
          id: 1,
          username: "test1",
          email: "test1@test.com",
          password: bcrypt.hashSync("test1", 12)
        },
        {
          id: 2,
          username: "test2",
          email: "test2@test.com",
          password: bcrypt.hashSync("test2", 12)
        }
      ]);
    });
  };
};
