"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const connectionDB_1 = __importDefault(require("./connectionDB"));
const product_routes_1 = __importDefault(require("../routes/product_routes"));
class Server {
    constructor() {
        dotenv_1.default.config({ path: "variables.env" });
        (0, connectionDB_1.default)();
        this.app = (0, express_1.default)();
        this.initConfiguration();
        this.initRoutes();
    }
    initConfiguration() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "50MB" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initRoutes() {
        this.app.use("/backend", product_routes_1.default);
    }
    initServer() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Backend listo en:", "localhost:" + this.app.get("PORT"));
        });
    }
}
exports.default = Server;
