const server = require('./server');
const orderRecipesTest = require('./utils/OrderRecipes');
const giphyTest = require('./integration/GiphyApi');
const puppyTest = require('./integration/PuppyApi');

// API
server.validPage();
server.validPageWithThreeIngredients();
server.validPageWithoutIngredients();
server.validPageManyIngredients();
server.InvalidPage();

// Utils
orderRecipesTest.orderTest();

// Integrations
giphyTest.searchTest();
puppyTest.searchRecipeTest();
