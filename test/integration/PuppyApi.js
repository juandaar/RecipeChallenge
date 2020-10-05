const puppyAPI = require('../../externals/PuppyApi');

const searchRecipeTest = () => {
  describe('recipeSearch puppyApi', () => {
    it('GET recipes by ingredients from puppy API', async () => {
      const ingredientTest = ['onions', 'carrots'];
      const recipes = await puppyAPI.recipeSearch(ingredientTest);
      recipes.should.be.a('array');
      recipes[0].should.have.property('title');
      recipes[0].should.have.property('ingredients');
      recipes[0].should.have.property('href');
    });
  });
};

module.exports = {
  searchRecipeTest,
};
