
const service = require('../services/RecipeServices')
module.exports={
    async getRecipes(req,res)
    {
        try{
            const ingredients= req.query.i;
            const recipes = await service.getRecipes(ingredients)
            return res.status(200).json(recipes)
        
        }
        catch(error)
        {
            return res.status(411).json(error.message)
        }
    
    }
}