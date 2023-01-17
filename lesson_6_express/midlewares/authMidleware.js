const TokenService = require("../services/token-service");
const ErrorHandler = require("../utils/ErrorHandler");

const authMidleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return next(ErrorHandler.UnauhtorizedError());
    }

    const accesToken = authorization.split(" ")[1];

    if (!accesToken) {
      return next(ErrorHandler.UnauhtorizedError());
    }
    const tokenData = TokenService.validateToken(accesToken);

    if (!tokenData) {
      return next(ErrorHandler.UnauhtorizedError());
    }
    req.student = tokenData;
    next();
  } catch (e) {
    return next(ErrorHandler.UnauhtorizedError());
  }
};

module.exports = authMidleware;
