const Restraunts = require("../models/Restraunt");
const City = require("../models/City");
const uuid4 = require("uuid4");

class RestrauntsController {
  static async addRestraunt({ address, city, rating, zipcode, name }) {
    try {
      const existingCity = await City.findOne({ where: { cityName: city } });
      // console.log(existingCity)
      if (existingCity) {
        const restraunt = {
          cityID: existingCity.dataValues.cityID,
          restrauntID: uuid4(),
          name: name,
          zipcode: zipcode,
          address: address,
          rating: rating,
        };

        console.log(restraunt);
        const createdRestraunt = await Restraunts.create(restraunt);
        console.log(createdRestraunt);
        return {
          message: "Added restraunt: " + createdRestraunt.restrauntID,
        };
      } else {
        const ct = {
          cityID: uuid4(),
          cityName: city,
          stateName: "navin",
        };
        const createdCity = await City.create(ct);

        const restraunt = {
          cityID: createdCity.cityID,
          restrauntName: name,
          restrauntID: uuid4(),
          zipcode: zipcode,
          address: address,
          rating: rating,
        };

        const createdRestraunt = await Restraunts.create(restraunt);

        return {
          message: "Added restraunt: " + createdRestraunt.restrauntID,
        };
      }
    } catch (error) {}
  }

  static async getRestraunts() {
    const restraunts = await Restraunts.findAll();
    return restraunts;
  }

  static async deleteRestraunt(restrauntID) {
    const restraunt = await Restraunts.destroy({
      where: { restrauntID: restrauntID },
    });
    return restraunt;
  }
  
  static async getRestraunt(restrauntID) {
    const restraunt = await Restraunts.findOne({
      where: { restrauntID: restrauntID },
    });
    
    return restraunt;
  }
}

module.exports = RestrauntsController;
