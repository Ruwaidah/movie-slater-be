const db = require("../../database/dbConfig.js");

async function add(data, tb) {
    const [id] = await db(tb).insert(data, "id"); return findBy({ id: id }, tb);
}

const findBy = (data, tb) =>
    db(tb).where(data).first();


async function updateUser(data, tb, id) {
    await db(tb).where(id).update(data);
    return findBy(id, tb)
}


module.exports = {
    findBy, add, updateUser
};