
module.exports =
{

    serverConf:
    {
        port:process.env.APP_PORT
    },
    giphyConf:
    {
        url:process.env.GIPHY_URL,
        token:process.env.GIPHY_API_TOKEN
    },
    puppyConf:{
        url:process.env.PUPPY_URL
    }
}