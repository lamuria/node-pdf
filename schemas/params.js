var Joi = require('joi');

module.exports = Joi.object().required().keys({
  url: Joi.string().required(),
  filename: Joi.string()
});
