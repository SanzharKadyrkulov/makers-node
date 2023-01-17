const { Profile } = require("./../models/models.js");
const ErrorHandler = require("./../utils/errorHandler.js");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { generateFileName } = require("../utils/functions.js");

class ProfileService {
  static getOne = async (id) => {
    const profile = await Profile.findOne({ where: { id } });
    if (!profile) throw ErrorHandler.BadRequest("Profile not found");
    return profile;
  };

  static create = async ({
    firstName,
    lastName,
    age,
    phone,
    img,
    gender,
    userId,
  }) => {
    let fileName = null;
    if (img) {
      fileName = generateFileName(img.mimetype);
      img.mv(path.resolve("public", fileName));
    }

    return await Profile.create({
      firstName,
      lastName,
      age,
      phone,
      gender,
      userId,
      img: fileName,
    });
  };
  static update = async ({
    firstName,
    lastName,
    age,
    gender,
    phone,
    userId,
    id,
    img,
  }) => {
    const profile = await Profile.findOne({ where: { id } });
    if (!profile) throw ErrorHandler.BadReguest("Profile not found");

    firstName = firstName || profile.firstName;
    lastName = lastName || profile.lastName;
    age = age || profile.age;
    gender = gender || profile.gender;
    phone = phone || profile.phone;
    userId = userId || profile.userId;
    let fileName = profile.img;

    if (img) {
      if (fileName) {
        fs.unlinkSync(path.resolve("public", fileName));
      }

      const newFileName = generateFileName(img.mimetype);
      img.mv(path.resolve("public", newFileName));
      fileName = newFileName;
    }

    return await Profile.update(
      {
        firstName,
        lastName,
        age,
        gender,
        phone,
        userId,
        img: fileName,
      },
      {
        where: { id },
      }
    );
  };
}

module.exports = ProfileService;
