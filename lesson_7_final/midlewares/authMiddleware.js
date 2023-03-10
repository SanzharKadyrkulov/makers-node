const jwt = require("jsonwebtoken");
const TokenService = require("../services/tokenServices.js");
const ErrorHandler = require("../utils/errorHandler.js");

const authMiddleware = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization);
    if (!token) {
      return next(ErrorHandler.UnauthorizedError());
    }

    const userData = TokenService.validateAccessToken(token);

    if (!userData) {
      return next(ErrorHandler.UnauthorizedError());
    }

    req.user = userData;
    // console.log(userData);
    next();
  } catch (e) {
    return next(ErrorHandler.UnauthorizedError());
  }
};

module.exports = authMiddleware;
