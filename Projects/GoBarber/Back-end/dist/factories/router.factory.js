"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_factory_1 = require("./server.factory");
function routerFactory() {
    var Router = server_factory_1.server.Router;
    return Router();
}
exports.default = routerFactory;
