require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const path = require("path");
const sequelize = require("./db.js");
const errorMiddleware = require("./midlewares/errorMiddleware.js");
const app = express();
const routes = require("./routes/indexRoutes.js");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/static", express.static(path.resolve("public")));
app.use(fileUpload({}));
app.use(morgan("tiny"));

app.use("/api/v1", routes);
app.use(errorMiddleware);

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

run();
