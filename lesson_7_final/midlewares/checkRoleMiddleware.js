const ErrorHandler = require("../utils/errorHandler.js");

const checkRoleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const user = req.user;
      console.log(user);
      if (!roles.includes(user.role)) {
        return next(ErrorHandler.ForbiddenError("not allowed"));
      }
      next();
    } catch (e) {
      return next(ErrorHandler.UnauthorizedError());
    }
  };
};

module.exports = checkRoleMiddleware;
