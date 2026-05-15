const db = require('../lib/db');

const getAllCharacters = async () => {
    const result = await db.query('SELECT * FROM characters ORDER BY id ASC');

    return result.rows;
};

const getCharacterById = async (id) => {
    const result = await db.query(
        'SELECT * FROM characters WHERE id = $1',
        [id]
    );

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
};

module.exports = {
    getAllCharacters,
    getCharacterById
};