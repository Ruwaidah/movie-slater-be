const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("owner").then(function() {
    return knex("owner").insert([
      {
        id: 1,
        username: "owner1",
        email: "owner1@test.com",
        password: bcrypt.hashSync("owner1", 12)
      },
      {
        id: 2,
        username: "owner2",
        email: "owner2@test.com",
        password: bcrypt.hashSync("owner2", 12)
      }
    ]);
  });
};
