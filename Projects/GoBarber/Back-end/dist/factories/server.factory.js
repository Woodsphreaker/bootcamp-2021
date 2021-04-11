"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.createApp = void 0;
var express_1 = __importDefault(require("express"));
exports.server = express_1.default;
function createApp() {
    var app = express_1.default();
    app.use(express_1.default.json());
    return app;
}
exports.createApp = createApp;
