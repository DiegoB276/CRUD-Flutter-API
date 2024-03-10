"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product_controller"));
class ProductRouter {
    constructor() {
        this.apiRouter = (0, express_1.Router)();
        this.configureRouter();
    }
    configureRouter() {
        this.apiRouter.get("/api/v1/products/all", product_controller_1.default.GetAll);
        this.apiRouter.post("/api/v1/products/add", product_controller_1.default.CreateProduct);
        this.apiRouter.delete("/api/v1/products/delete/:code", product_controller_1.default.DeleteProduct);
    }
}
const productRouter = new ProductRouter();
exports.default = productRouter.apiRouter;
