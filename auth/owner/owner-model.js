const db = require('../../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('owner')
        .select('id', 'email', 'username', 'password');
}

function findBy(filter) {
    return db('owner')
        .where(filter)
        .first();
}

async function add(user) {
    const [id] = await db('owner')
                    .insert(user);

    return findById(id);
}

function findById(id) {
    return db('owner')
        .where({ id })
        .first();
}