const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  // port: process.env.DB_PORT, // Using the correct MySQL port from your .env file
  connectionLimit: 10,
});

module.exports = dbConnection.promise();

// console.log("Loaded Environment Variables:", {
//   PORT: process.env.PORT,
//   USER: process.env.USER,
//   DATABASE: process.env.DATABASE,
//   JWT_SECRET: process.env.JWT_SECRET,
// });
