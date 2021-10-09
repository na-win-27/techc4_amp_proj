const User = require("../models/user");
const uuid4 = require("uuid4");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
  static async signup({ email, password, contact, name }) {
    try {
      const existing = await User.findOne({ where: { email: email } });

      if (existing) {
        return {
          code: 400,
          message: "User already exists",
        };
      }
      var hashed, e;
      await bcrypt.hash(password, 12).then(async (res, err) => {
        if (err) {
          e = err;
        } else {
          hashed = res;
        }
      });
      console.log(hashed);
      if (e) {
        return {
          code: 400,
          message: "Some Error occurred",
        };
      } else {
        const user = {
          userID: uuid4(),
          email: email,
          contact: contact,
          password: hashed,
          name: name,
        };
        const createdUser = await User.create(user);
        const token = jwt.sign(
          {
            id: createdUser.email,
          },
          "navin"
        );

        return {
          code: 201,
          message: "User Created",
          jwt: token,
        };
      }
    } catch (e) {
      console.log(e);
      return {
        error: true,
        code: 500,
        message: err.toString(),
      };
    }
  }

  static async signin({ email, password }) {
    try {
      const existing = await User.findOne({ where: { email: email } });
      var res;
      if (existing) {
        await bcrypt.compare(password, existing.password).then((_, err) => {
          if (err) {
            res = {
              code: 400,
              message: "Some Error occurred",
            };
          } else {
            const token = jwt.sign(
              {
                id: existing.email,
              },
              "navin"
            );

            res = {
              code: 201,
              message: "Logged In Successfully",
              jwt: token,
            };
          }
        });
      } else {
        res = { code: 404, message: "User Does Not Exist" };
      }
      return res;
    } catch (error) {
      console.log(e);
      return {
        error: true,
        code: 500,
        message: err.toString(),
      };
    }
  }
}

module.exports = authController;
