require("dotenv").config();
const { Student, School } = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/ErrorHandler.js");
const TokenService = require("../services/token-service.js");
const { SECRET_KEY } = process.env;
class StudentController {
  static getAll = async (req, res) => {
    try {
      let { school, page, limit } = req.query;
      page = page || 1;
      limit = limit || 5;
      let offset = page * limit - limit;
      let students;

      if (school) {
        students = await Student.findAndCountAll({
          where: { schoolId: school },
          limit,
          offset,
        });
        return res.json(students);
      }

      students = await Student.findAndCountAll({ limit, offset });

      return res.json(students);
    } catch (e) {
      console.log(e);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const student = await Student.findOne({
        where: { id },
        include: {
          model: School,
          as: "school",
          attributes: ["name", "adress"],
        },
      });

      if (!student) {
        throw ErrorHandler.BadRequest("Student not found");
      }

      return res.json(student);
    } catch (e) {
      next(e);
    }
  };

  static signup = async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(
          ErrorHandler.BadRequest("validation error", errors.array())
        );
      }

      const { email, password, firstName, lastName } = req.body;

      const oldStudent = await Student.findOne({ where: { email } });

      if (oldStudent) {
        throw ErrorHandler.BadRequest(
          `User with given email ${email} is already exist`
        );
      }

      const hashPassword = await bcrypt.hash(password, 3);

      const student = await Student.create({
        email,
        password: hashPassword,
        lastName,
        firstName,
      });

      const tokens = TokenService.generateTokens({ id: student.id, email });

      return res.json(tokens);
    } catch (e) {
      next(e);
    }
  };

  static login = async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(
          ErrorHandler.BadRequest("validation error", errors.array())
        );
      }

      const { email, password } = req.body;

      const student = await Student.findOne({ where: { email } });

      if (!student) {
        throw ErrorHandler.BadRequest("Student with given email not found");
      }
      const comparePassword = await bcrypt.compareSync(
        password,
        student.password
      );
      if (!comparePassword) {
        throw ErrorHandler.BadRequest("Password does not match");
      }

      const tokenss = TokenService.generateTokens({ id: student.id, email });
      return res.status(200).json(tokens);
    } catch (e) {
      next(e);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      let { email, firstName, lastName, schoolId } = req.body;

      const student = await Student.findOne({ where: { id } });

      if (!student) {
        throw ErrorHandler.BadRequest("Student not found");
      }

      email = email || student.email;
      firstName = firstName || student.firstName;
      lastName = lastName || student.lastName;
      schoolId = schoolId || student.schoolId;

      await Student.update(
        { email, firstName, lastName, schoolId },
        { where: { id } }
      );

      return res.json({ message: "Student was updated" });
    } catch (e) {
      next(e);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await Student.destroy({ where: { id } });
      return res.json({ message: "Student was deleted" });
    } catch (e) {
      next(ErrorHandler.InternalError());
    }
  };
}

module.exports = StudentController;
