const lessonService = require("../services/lessonService");

class lessonController {
  static getAll = async (req, res, next) => {
    try {
      const lessons = await lessonService.getAll();
      res.json(lessons);
    } catch (e) {
      next(e);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const lesson = await lessonService.getOne(id);
      return res.json(lesson);
    } catch (e) {
      next(e);
    }
  };
  static create = (req, res, next) => {
    try {
      const { id: teacherId } = req.user;
      const createData = {
        ...req.body,
        teacherId,
      };
      await lessonService.create(createData);
      res.json({ message: "created" });
    } catch (e) {
      next(e);
    }
  };
  static addStudent = async (req, res, next) => {
    try {
      const { id } = req.params;
    } catch (e) {
      next(e);
    }
  };
}

module.exports = lessonController;
