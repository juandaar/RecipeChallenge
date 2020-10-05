const giphyAPI = require('../../externals/GiphyApi');

const searchTest = () => {
  describe('Search Giphy', () => {
    it('Search giphy return a URL', async () => {
      const gif = await giphyAPI.gifSearch('pizza');
      gif.should.be.a('string');
      gif.should.have.string('https://');
    });
  });
};
module.exports = { searchTest };
