import express from "express";
import cors from "cors";

const app = express();

// TO use this package and allow traffic from allawhere: middleware
app.use(cors());
app.use(express.json());

const products = [
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

app.listen(5050, () => {
  console.log("I am rurrning");
});
