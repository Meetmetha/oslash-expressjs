const express = require('express');
const authRoute = require('./auth.route');
const shortcutRoute = require('./shortcut.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth', // Auth Endpoints
    route: authRoute,
  },
  {
    path: '/shortcut',
    route: shortcutRoute, //User Route
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
