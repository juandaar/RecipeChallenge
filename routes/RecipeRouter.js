require('dotenv').config({ path:__dirname+'/conf/.env'})
const express = require('express')
const router = express.Router()
const recipeController =require("../controllers/RecipeController")
router.get("/",recipeController.get)

module.exports = router;    