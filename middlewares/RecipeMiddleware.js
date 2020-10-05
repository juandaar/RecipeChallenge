const { query, validationResult } = require('express-validator');

const getRecipesRules = () => {
  const ingredientSanitizer = (value) => (!value ? [] : value.split(','));
  const ingredients = query('i').customSanitizer(ingredientSanitizer);
  const min = 1;
  const max = 3;
  const message = `Require to provide between ${min} and ${max} ingredients to  give the recipes`;
  return [
    ingredients,
    query('i', message).isArray({
      min: 1,
      max: 3,
    }),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  getRecipesRules,
  validate,

};
