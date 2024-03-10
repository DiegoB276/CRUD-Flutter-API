"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    price: { type: Number, required: true, trim: true },
    desc: { type: String, required: true, trim: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Product", ProductSchema, "Products");
