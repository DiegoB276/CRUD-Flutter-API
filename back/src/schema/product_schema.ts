import { model, Schema } from "mongoose";
import Product from "../entity/product";

const ProductSchema = new Schema<Product>({
    name: {type: String, required: true, unique: true, trim: true},
    price: {type: Number, required: true, trim: true},
    desc: {type: String, required: true, trim: true}
},{versionKey: false});

export default model("Product", ProductSchema, "Products");