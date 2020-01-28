const db = require('../../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('consumer')
        .select('id', 'email', 'username', 'password');
}

function findBy(filter) {
    return db('consumer')
        .where(filter);
}

async function add(user) {
    const [id] = await db('consumer')
                    .insert(user);

    return findById(id);
}

function findById(id) {
    return db('consumer')
        .where({ id })
        .first();
}