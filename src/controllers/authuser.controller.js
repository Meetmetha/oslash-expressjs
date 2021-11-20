const httpStatus = require('../../node_modules/http-status');
const catchAsync = require('../utils/catchAsync');
const checkHeader = require('../utils/chechHeader');
const { authService, tokenService} = require('../services');
const SessionCheck = require('../utils/SessionCheck');

const register = catchAsync(async (req, res) => {
  const AuthData = await authService.createAuthData(req.body);
  const authtoken = await tokenService.generateUserToken(AuthData.id);
  const devicehash = req.headers.devicehash;
  const devicetype = req.headers.devicetype;
  const fcmtoken = req.headers.fcmtoken;
  await tokenService.addDeviceHandler(AuthData.id, authtoken, '1.1.1.1', devicehash, devicetype, fcmtoken);
  res.status(httpStatus.CREATED).send({ AuthData, authtoken });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const AuthData = await authService.loginAuthWithEmailAndPassword(email, password);
  const authtoken = await tokenService.generateUserToken(AuthData.id);
  const devicehash = req.headers.devicehash;
  const devicetype = req.headers.devicetype;
  const fcmtoken = req.headers.fcmtoken;
  await tokenService.addDeviceHandler(AuthData.id, authtoken, '1.1.1.1', devicehash, devicetype, fcmtoken);
  res.send({ AuthData, authtoken });
});

const logout = catchAsync(async (req, res) => {
  const token = checkHeader(req);
  await tokenService.logoutdevice(token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout
};
