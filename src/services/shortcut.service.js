const httpStatus = require('http-status');
const { Shortcut } = require('../models');
const ApiError = require('../utils/ApiError');
const Meili = require('../microservices/meilisearchService');

/**
 * Create a Shortcut
 * @param {Object} AuthBody
 * @returns {Promise<Auth>}
 */
const createShortcut = async (authBody) => {
  const shortcutdata = await Shortcut.create(authBody);
  let newShortcutArray = [];
  newShortcutArray.push(shortcutdata);
  await Meili.addShortcut(newShortcutArray);
  return shortcutdata;
};

/**
 * Delete a Shortcut
 * @param {ObjectId} ShortcutId
 * @returns {Promise<Auth>}
 */
 const deleteShortcut = async (ShortcutId) => {
  const shortcut = await getShortcutDocById(ShortcutId);
  if (!shortcut) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Shortcut not found');
  }
  await shortcut.remove();
  await Meili.deleteShortcut(ShortcutId);
  return shortcut;
};

/**
 * Get Auth by id
 * @param {ObjectId} id
 * @returns {Promise<Auth>}
 */
 const getShortcutDocById = async (id) => {
  return Shortcut.findOne({ _id: id });
};

/**
 * Query User Shortcuts
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryShortcuts = async (filter, options) => {
  const shortcutdata = await Shortcut.paginate(filter, options);
  return shortcutdata;
};

/**
 * Get Auth by id
 * @param {ObjectId} id
 * @returns {Promise<Auth>}
 */
 const queryShortcutsbyQuery = async (searchQuery, userid) => {
   const searchResult = await Meili.searchShortcut(searchQuery,userid );
   return searchResult.hits;
};

module.exports = {
  createShortcut,
  deleteShortcut,
  queryShortcuts,
  getShortcutDocById,
  queryShortcutsbyQuery,
};
