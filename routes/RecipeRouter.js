require('dotenv').config();
const express = require('express');

const router = express.Router();
const controller = require('../controllers/RecipeController');
const middleware = require('../middlewares/RecipeMiddleware');

router.get('/', middleware.getRecipesRules(), middleware.validate, controller.getRecipes);

module.exports = router;
