import express from "express";
import { GetProducts } from "../../controllers/products/get.js";
import { SaveProduct } from "../../controllers/products/post.js";
import { DeleteProduct } from "../../controllers/products/delete.js";
import { UpdateProduct } from "../../controllers/products/update.js";

const Router = express.Router();

Router.get("/list", GetProducts);

Router.post("/add", SaveProduct);

Router.delete("/delete/:id", DeleteProduct);

Router.put("/update/:id", UpdateProduct);

export default Router;
