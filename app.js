require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
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
    console.log("Database connection established");

    // Start listening for incoming requests
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
  }
}

// Call the start function to initialize the app
start();

// require("dotenv").config()
// const express = require("express")
// const app = express()
// const port = process.env.PORT || 5500;
// // const port = 5500
// const cors = require("cors")

// app.use(cors())

// // db connection
// const dbConection = require("./db/dbConfig")

// // authentication middleware
// const authMiddleware = require("./middleware/authMiddleware");

// // user router middleware file
// const userRouter = require("./routes/userRoute")
// // json middleware to extract json data
// app.use(express.json())
// // user router middleware
// app.use("/api/users", userRouter);

// // question router middleware file
// const questionRoute = require("./routes/questionRoute");
// // question router middleware
// app.use("/api/questions", authMiddleware,questionRoute);

// // answer router middleware file
// const answerRoute = require("./routes/answerRoute");
// // answer router middleware
// app.use("/api", authMiddleware, answerRoute);

// async function start() {
//     try {
//         const result = await dbConection.execute("select 'test'")
//         await app.listen(port)
//         console.log("database connection established");
//         console.log(`listening on ${port}`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// start()

// app.listen(port, (err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`listening on localhost:${port}`);
//     }
// })
