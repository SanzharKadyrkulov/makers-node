class ErrorHandler extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest = (message, errors = []) => {
    return new ErrorHandler(400, message, errors);
  };

  static UnauhtorizedError = () => {
    return new ErrorHandler(401, "Пользователь не авторизован");
  };

  static ForbiddenError = (message) => {
    return new ErrorHandler(403, message);
  };

  static InternalError = () => {
    return new ErrorHandler(500, "Internal error");
  };
}

module.exports = ErrorHandler;
