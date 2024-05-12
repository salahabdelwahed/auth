console.clear();

//importation
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./Routes/userRoutes.js"
//end

//asign
const app = express();
const port = process.env.port;
const urlDB = process.env.url_DB;
//end

//midellware 
app.use(express.json())
//end

//connection DB
mongoose
  .connect(urlDB)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("error from db", err));
//end

//Routes
app.use("/user",userRoutes)
//end

//server listen
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on http://localhost:${port}`);
});
//end