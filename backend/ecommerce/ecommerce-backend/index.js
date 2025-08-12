import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRouter from "./routes/products/main.js";

const app = express();

dotenv.config();
// TO use this package and allow traffic from allawhere: middleware
app.use(cors());
app.use(express.json());

async function connectMongoDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Bb Connected");
  } catch (err) {
    console.log(err);
  }
}

connectMongoDb();

app.use("/products", ProductRouter);

app.listen(5050, () => {
  console.log("I am rurrning");
});
