const axios = require('axios')
const {puppyConf} = require('../conf/Configuration')
const {ErrorHandler,dependencyType}= require("../utils/ErrorHandler")

const recipeSearch = async(ingredients) =>{
    const query =`?i=${ingredients.join(',')}`
    const url=puppyConf.url+query
    try{
        const res= await axios.get(url)
        const {results}=res.data;
        return results;

    }
    catch(error){
        console.error(error.response)
        const message="Recipe Puppy is unavailable in this moment, please try later"
        const dependency="Recipe Puppy API"
        throw new ErrorHandler(502,dependencyType.external,dependency,message)
    }

}

module.exports={
    recipeSearch
}