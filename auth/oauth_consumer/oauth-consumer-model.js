const db = require("../../database/dbConfig.js");

module.exports = {
  findBy,
  add
};

function findBy(email) {
  return db("oauth_consumer")
    .where({ email })
    .first();
}

function add(consumer) {
  return db("oauth_consumer").insert(
    { name: consumer.name, email: consumer.email },
    "id"
  );
}
