const { message } = require("statuses");
const ErrorHandler = require("./../utils/errorHandler.js");

module.exports = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  console.log(err);
  return res.status(500).json({ message: err.message });
};
