const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  update
};

function find() {
  return db("seats").select(
    "id",
    "row",
    "column",
    "seatName",
    "available",
    "handicap"
  );
}

function findById(id) {
  return db("seats")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("seats")
    .where({ id })
    .update(changes);
}
