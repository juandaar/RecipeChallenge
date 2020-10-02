const express = require('express')
const router = express.Router()
const RecipeRouter= require("./RecipeRouter")

router.use('/recipes', RecipeRouter)

module.exports = router