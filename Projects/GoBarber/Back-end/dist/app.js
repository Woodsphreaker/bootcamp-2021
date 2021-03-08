"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("./routes"));
var factories_1 = require("./factories");
var createApp = factories_1.serverFactory.createApp;
var app = createApp();
app.use(routes_1.default);
exports.default = app;
