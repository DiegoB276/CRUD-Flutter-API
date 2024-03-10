"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_dao_1 = __importDefault(require("../dao/product_dao"));
class ProductController extends product_dao_1.default {
    GetAll(request, response) {
        ProductController.getAllProducts(response);
    }
    CreateProduct(request, response) {
        ProductController.addProduct(request.body, response);
    }
    DeleteProduct(request, response) {
        ProductController.deleteProduct(request.params.code, response);
    }
}
const productController = new ProductController();
exports.default = productController;
