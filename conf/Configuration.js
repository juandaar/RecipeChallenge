module.exports = {
    serverConf: {
    port: process.env.APP_PORT || 3000,
  },
  giphyConf: {
    token: process.env.GIPHY_API_TOKEN,
  },
  puppyConf: {
    url: process.env.PUPPY_URL || 'http://www.recipepuppy.com/api/',
  },
};
