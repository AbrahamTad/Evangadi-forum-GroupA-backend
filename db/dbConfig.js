const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.port || 3306, // Using the correct MySQL port from your .env file
  connectionLimit: 10,
});

module.exports = dbConnection.promise();

// console.log("Loaded Environment Variables:", {
//   PORT: process.env.PORT,
//   USER: process.env.USER,
//   DATABASE: process.env.DATABASE,
//   JWT_SECRET: process.env.JWT_SECRET,
// });
