const db = require("../../database/dbConfig.js");

module.exports = {
  findBy,
  insert
};

function findBy(email) {
  return db("oauth_consumer")
    .where({ email })
    .first();
}

function insert(consumer) {
  return db("oauth_consumer").insert(
    { name: consumer.name, email: consumer.email },
    "id"
  );
}
