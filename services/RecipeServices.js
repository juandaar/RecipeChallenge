const puppyApi = require('../externals/PuppyApi')
const giphyApi = require('../externals/GiphyApi')
const {orderRecipes} = require('../utils/OrderRecipes')

   const getRecipes = async(ingredients) => 
   {
       const response={};
       response.keywords=ingredients.sort()
       response.recipes=[];
       
       const  recipes= await  puppyApi.recipeSearch(ingredients);

       await Promise.all (
           recipes.map(async (recipe) =>
           {
               const gif = await giphyApi.gifSearch(recipe.title)
               response.recipes.push({
                   title: recipe.title.trim().toLowerCase(),
                   ingredients: recipe.ingredients.split(', ').sort(),
                   link: recipe.href,
                   gif:gif
               })
           })
        )
        orderRecipes(response.recipes)
        return response
   }

module.exports ={
    getRecipes
}