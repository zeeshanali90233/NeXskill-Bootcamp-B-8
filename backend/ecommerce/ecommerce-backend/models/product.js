import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("products", ProductSchema);
export default Product;
