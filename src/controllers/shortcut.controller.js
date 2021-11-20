const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { shortcutService } = require('../services');

const getShortcut = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const searchQuery = req.query.search;
  if(searchQuery == undefined || searchQuery == null){
    const resultShortcuts = await shortcutService.queryShortcuts(filter, options);
    res.send(resultShortcuts);
  }else{
    const resultShortcutQuery = await shortcutService.queryShortcutsbyQuery(searchQuery, req.SubjectId);
    res.send(resultShortcutQuery);
  }
});

const createShortcut = catchAsync(async (req, res) => {
  const createData = req.body;
  createData.user = req.SubjectId;
  const result = await shortcutService.createShortcut(createData);
  res.send(result);
});

const deleteShortcut = catchAsync(async (req, res) => {
  const result = await shortcutService.deleteShortcut(req.body.shortcutid)
  res.json({"message":"Your Shortcut is deleted"});
});



module.exports = {
  getShortcut,
  createShortcut,
  deleteShortcut
};
