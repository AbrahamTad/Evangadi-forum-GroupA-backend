// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const dbConection = require("./db/dbConfig");
// const authMiddleware = require("./middleware/authMiddleware");
// const userRouter = require("./routes/userRoute");
// const questionRoute = require("./routes/questionRoute");
// const answerRoute = require("./routes/answerRoute");

// const app = express();
// const port = process.env.PORT || 3000; // Default to 3000 if no environment variable is set

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/users", userRouter);
// app.use("/api/questions", authMiddleware, questionRoute);
// app.use("/api", authMiddleware, answerRoute);

// // Start the server
// async function start() {
//   try {
//     console.log(`Attempting to start server on port: ${port}`);

//     // Test database connection
//     const result = await dbConection.execute("SELECT 'test'");
//     console.log("Database connection established:", result);

//     // Listen on the port
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error("Error starting the server:", error.message);
//   }
// }

// start();

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5500
const cors = require("cors");

app.use(cors());

// db connection
const dbConection = require("./db/dbConfig");

// authentication middleware
const authMiddleware = require("./middleware/authMiddleware");

// user router middleware file
const userRouter = require("./routes/userRoute");
// json middleware to extract json data
app.use(express.json());
// user router middleware
app.use("/api/users", userRouter);

// question router middleware file
const questionRoute = require("./routes/questionRoute");
// question router middleware
app.use("/api/questions", authMiddleware, questionRoute);

// answer router middleware file
const answerRoute = require("./routes/answerRoute");
// answer router middleware
app.use("/api", authMiddleware, answerRoute);

async function start() {
  try {
    const result = await dbConection.execute("select 'test'");
    await app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

// app.listen(port, (err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`listening on localhost:${port}`);
//     }
// })
