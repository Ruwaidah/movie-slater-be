const db = require("../../database/dbConfig.js");

module.exports = {
  findBy,
  add,
  findById
};

function findBy(email) {
  return db("oauth_consumer")
    .where({ email })
    .first();
}

function findById(id) {
  return db("oauth_consumer")
    .where({ id })
    .first();
}

async function add(consumer) {
  const [id] = await db("oauth_consumer").insert(
    { name: consumer.name, email: consumer.email },
    "id"
  );
  return findById(id);
}
