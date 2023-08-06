import mongoose, { Mongoose } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timeseries: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
