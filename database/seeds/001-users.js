const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      {
        id: 1,
        username: "test1",
        email: "test1@test.com",
        password: bcrypt.hashSync("test1", 12),
        role: "movie consumer"
      },
      {
        id: 2,
        username: "test2",
        email: "test2@test.com",
        password: bcrypt.hashSync("test2", 12),
        role: "theater-owner"
      }
    ]);
  });
};
