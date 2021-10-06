module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "navin27",
    DB: "techc4",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };