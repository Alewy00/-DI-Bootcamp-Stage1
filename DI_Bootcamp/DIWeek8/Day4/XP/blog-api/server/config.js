const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
  },
});

// console.log(process.env.PASSWORD);

// db.raw("SELECT 1")
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database:", error);
//   })

module.exports = {
  db,
};
