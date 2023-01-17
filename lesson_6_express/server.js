require("dotenv").config();
const express = require("express");
const path = require("path");
const errorMidleware = require("./midlewares/errorMidleware.js");
// const morgan = require("morgan");

const app = express();
const sequelize = require("./database.js");
// const studentsRoutes = require("./routes/students.js");
// const todosRoutes = require("./routes/todos.js");
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 5000;

let students = [];

app.use(express.json());
app.use("/static", express.static(path.resolve("public")));
// app.use((req, res, next) => {
//   console.log("before request");
//   next();
//   console.log("after request");
// });

// const isAdult = (req, res, next) => {
//   const { age } = req.query;
//   if (age >= 18) {
//     next();
//   } else {
//     res.status(401).json({ message: "Вам нет 18" });
//   }
// };

// app.use(isAdult);

// app.use("/api/v1", studentsRoutes);
// app.use("/api/v2", todosRoutes);
app.use("/api/v1", routes);
app.use(errorMidleware);

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

run();
