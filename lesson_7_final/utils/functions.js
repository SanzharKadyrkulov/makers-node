const { v4: uuidv4 } = require("uuid");

const generateFileName = (minmetype) => {
  return uuidv4() + "." + minmetype.split("/")[1];
};

module.exports = {
  generateFileName,
};
