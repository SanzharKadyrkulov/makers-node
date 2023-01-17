const ErrorHandler = require("../utils/errorHandler.js");
const { Lesson } = require("./../models/models.js");

class lessonService {
  static getAll = async () => {
    return await Lesson.findAll();
  };
  static getOne = async (id) => {
    const lesson = await Lesson.findOne({ where: { id } });
    if (!lesson) throw ErrorHandler.BadReguest("Lesson not found");
    return lesson;
  };
  static create = async ({ name, hours, teacherId }) => {
    return await Lesson.create({ name, hours, teacherId });
  };
  static update = async ({ name, hours, teacherId, id }) => {
    return await Lesson.update({ teacherId }, { where: { id } });
  };
  static addStudent = async ({ studentId, id }) => {};
}

module.exports = lessonService;
