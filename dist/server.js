"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./database/config");
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes/routes");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
(0, config_1.connectionToDatabase)();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "uploads")));
app.use(express_1.default.json());
app.use(routes_1.router);
const port = process.env.PORT;
app.listen(port, () => {
    console.log("app running on port: http://localhost:3000");
});
