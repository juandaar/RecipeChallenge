const { giphyConf } = require('../conf/Configuration');
// eslint-disable-next-line import/order
const giphy = require('giphy-api')(giphyConf.token);
const { ErrorHandler, dependencyType } = require('../utils/ErrorHandler');

const gifSearch = async (recipe) => {
  try {
    const { data, pagination } = await giphy.search({
      q: recipe,
      limit: 1,
    });
    if (pagination.total_count === 0) return '';
    return data[0].url;
  } catch (error) {
    const message = 'Giphy is unavailable in this moment, please try later';
    const dependency = 'Giphy API';
    throw new ErrorHandler(502, dependencyType.external, dependency, message);
  }
};
module.exports = {
  gifSearch,
};
