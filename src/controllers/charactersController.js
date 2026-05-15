const charactersServices = require("../services/charactersServices");

const getHomePage = async (req, res) => {
    try {

        const characters = await charactersServices.getAllCharacters();

        res.render('characters', {
            title: 'The Lord of the Rings',
            characters: characters
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

const getCharactersDetail = async (req, res) => {
    try {

        const id = req.params.id;

        const characters = await charactersServices.getCharacterById(id);

        if (!characters) {
            return res.status(404).send('Character not found');
        }

        res.render('characters-detail', {
            title: 'Character Details',
            characters: characters
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

module.exports = {
    getHomePage,
    getCharactersDetail
};