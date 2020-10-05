const {giphyConf} = require('../../conf/Configuration')
const giphy = require('giphy-api')(giphyConf.token);


const gifSearch= async(recipe) =>{
    try{
    const {data,pagination}= await giphy.search({
            q: recipe,
            limit:1
        })
        if(pagination.total_count === 0) return ''
        return data[0].url;
    }
    catch(error){
        console.error(error.response)
        const message="Giphy is unavailable in this moment, please try later"
        const dependency="Giphy API"
        return null;
    }

}
module.exports ={
    gifSearch
}