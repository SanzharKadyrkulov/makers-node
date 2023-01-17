const ProfileService = require("../services/profileService");

class ProfileController {
  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const profile = await ProfileService.getOne(id);
      res.json(profile);
    } catch (e) {
      next(e);
    }
  };

  static create = async (req, res, next) => {
    try {
      let { firstName, lastName, age, gender, phone, userId } = req.body;
      let { img } = req.files;
      const profileData = {
        firstName,
        lastName,
        userId,
        age,
        gender,
        phone,
        img,
      };
      await ProfileService.create(profileData);
      res.json({ message: "Profile created" });
    } catch (e) {
      next(e);
    }
  };
  static update = async (req, res, next) => {
    try {
      let { firstName, lastName, age, gender, phone, userId } = req.body;
      const { id } = req.params;
      let { img } = req.files;
      const profle = await ProfileService.update({
        firstName,
        lastName,
        age,
        gender,
        phone,
        userId,
        id,
        img,
      });
      return res.json({ message: "updated" });
    } catch (e) {
      next(e);
    }
  };
}

module.exports = ProfileController;
