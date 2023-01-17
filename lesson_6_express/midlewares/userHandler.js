const auth = (req, res, next) => {
  const { token } = req.headers;
  if (token === "valid") {
    next();
  } else {
    res.status(401).json({ msg: `You are not authorizated` });
  }
};
module.exports = auth;
