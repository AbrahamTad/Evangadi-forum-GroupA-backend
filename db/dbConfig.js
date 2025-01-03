const mysql2 = require("mysql2");

const dbConection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
   host: process.env.DB_HOST || 'localhost',
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

