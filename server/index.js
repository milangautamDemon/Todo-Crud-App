import express from "express";
import cors from "cors";
import userRouter  from "./router/router.js";
import { configDotenv } from "dotenv";
import connectMongoDb from "./module/connection.js";
//create express app
const app = express();

// middleware setup
app.use(express.json());
app.use(cors())

//connection to .env file
configDotenv();

//connect to the mongo url
const URL = process.env.MONGO_URL;

//connection to the mongo db
connectMongoDb(URL);

//connection to the port
const PORT = process.env.PORT || 6001;

//connection to the router
app.use("/api", userRouter)

//listening at the port
app.listen(PORT, () => console.log("Server listen at port:", PORT));