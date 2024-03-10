"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConnectionDB = () => {
    const URL = String(process.env.DB_MONGO);
    (0, mongoose_1.connect)(URL).then(() => {
        console.log("Estás conectado a mongoDB", process.env.DB_MONGO);
    }).catch((error) => {
        console.log("No encuentro a Mongo", error);
    });
};
exports.default = ConnectionDB;
