const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/charactersController");

router.get("/characters", charactersController.getHomePage);

router.get("/characters/:id", charactersController.getCharactersDetail);

module.exports = router;