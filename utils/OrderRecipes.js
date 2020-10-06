// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

const compare = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const orderRecipes = (array) => {
  array.sort(compare);
};

module.exports = orderRecipes;
