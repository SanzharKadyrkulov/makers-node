class ErrorHandler extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadReguest = (message, errors = []) => {
    return new ErrorHandler(404, message, errors);
  };
  static UnauthorizedError = () => {
    return new ErrorHandler(401, "User not authorized");
  };
  static ForbiddenError = (message) => {
    return new ErrorHandler(401, message);
  };
  static InternalError = () => {
    return new ErrorHandler(
      500,
      "Server internal error occured, please try again later"
    );
  };
}

module.exports = ErrorHandler;
