"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const router_1 = require("./routes/router");
const body_parser_1 = __importDefault(require("body-parser"));
const server = new Server_1.default();
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use("/", router_1.router);
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}​​​​​`);
});
