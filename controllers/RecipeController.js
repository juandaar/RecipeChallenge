const service = require('../services/RecipeServices')
const {ErrorHandler, dependencyType} = require('../utils/ErrorHandler')
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
            if(error instanceof ErrorHandler)
            { 
                    console.log(error.message);
                    return res.status(error.code).json(error.message)
            }

            res.status(422).json(error);
        }
    
    }
}