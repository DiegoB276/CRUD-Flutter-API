"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = __importDefault(require("../schema/product_schema"));
class ProductDao {
    //Get all products
    static getAllProducts(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield product_schema_1.default.find().sort({ _id: 1 });
            response.status(200).json(data);
        });
    }
    //Create new Product
    static addProduct(params, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield product_schema_1.default.findOne(params);
            if (found) {
                response.status(400).json({ message: "El producto ya existe" });
            }
            else {
                const productObject = new product_schema_1.default(params);
                productObject
                    .save()
                    .then(() => response.status(200).json({ message: "Producto agregado con éxito" }))
                    .catch(() => response.status(400).json({ message: "Error al agregar el producto" }));
            }
        });
    }
    static deleteProduct(identifier, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const found = yield product_schema_1.default.findById(identifier).exec();
                if (found) {
                    const deleted = yield product_schema_1.default.findByIdAndDelete(identifier);
                    response
                        .status(200)
                        .json({
                        message: "Producto eliminado con éxito.",
                        deleted_register: deleted,
                    });
                }
                else {
                    response.status(400).json({ message: "El registro no existe." });
                }
            }
            catch (error) {
                response.status(400).json({ message: "No se pudo eliminar el registro." });
            }
        });
    }
}
exports.default = ProductDao;
