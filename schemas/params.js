var Joi = require('joi');

module.exports = Joi.object().required().keys({
  url: Joi.string().required(),
  fileName: Joi.string()
});
