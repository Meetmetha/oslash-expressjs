const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getShortcutbyQuery = {
  query: Joi.object().keys({
    search: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const createShortcut = {
  body: Joi.object().keys({
    shortlink: Joi.string().required(),
    url: Joi.string().required(),
    description: Joi.string(),
    tags: Joi.array().items(Joi.string())
  }),
};

const deleteShortcut = {
  body: Joi.object().keys({
    shortcutid: Joi.string().custom(objectId),
  }),
};


module.exports = {
  getShortcutbyQuery,
  createShortcut,
  deleteShortcut
};
