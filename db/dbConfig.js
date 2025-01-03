const mysql2 = require("mysql2");

const dbConection = mysql2.createPool({
  PORT: process.env.PORT,
  user: process.env.USER,
  DB_HOST: process.env.DB_HOST,
  database: process.env.DATABASE,
  host: "localhost",
  password: process.env.PASSWORD,
  connectionLimit: 10,
});


module.exports = dbConection.promise();

// console.log("Loaded Environment Variables:", {
//   PORT: process.env.PORT,
//   USER: process.env.USER,
//   DATABASE: process.env.DATABASE,
//   JWT_SECRET: process.env.JWT_SECRET,
// });

