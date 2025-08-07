import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

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
let products = [
  {
    id: 1,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzus2FBMIL9WscN_GYyFE6fLOW8Y3VXLrhQ&s",
    title: "GPU 5070",
    description: "One of the fastest gpu",
    price: 4000,
  },
  {
    id: 2,
    imageURL: "https://m.media-amazon.com/images/I/41X0Af18WAL.jpg",
    title: "Aukey Keyboard",
    description: "Ti is Mindblowing keyboard",
    price: 2000,
  },
];
app.get("/products", (req, res) => {
  res.status(200).json({
    products: products,
  });
});

app.post("/new-product", (req, res) => {
  const { title, description, imageURL } = req.body;
  console.log(title, description, imageURL);

  const newProduct = {
    id: products.length + 1,
    title: title,
    description: description,
    imageURL: imageURL,
  };

  products.push(newProduct);

  res.status(200).json({
    ok: true,
    message: "Successfully Saved",
  });
});

app.delete("/delete/:id", (req, res) => {
  try {
    // Which we have to remove
    const { id } = req.params;
    products = products.filter((pr) => {
      if (String(pr.id) !== id) {
        return pr;
      }
    });
    res.status(200).json({ ok: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ ok: false, message: "Server side issue" });
  }
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, imageURL } = req.body;
  console.log(title, description, imageURL);

  try {
    products = products.map((pr) => {
      if (pr.id == id) {
        return {
          ...pr,
          title: title,
          description: description,
          imageURL: imageURL,
        };
      }
      return pr;
    });
    res.status(200).json({ ok: true, message: "Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: true, message: "Something wrng wrong " });
  }
});

app.listen(5050, () => {
  console.log("I am rurrning");
});
