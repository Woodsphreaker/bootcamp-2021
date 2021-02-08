"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloTD = void 0;
var CreateUserService_1 = __importDefault(require("./services/CreateUserService"));
function helloTD(req, res) {
    var user = CreateUserService_1.default({
        name: 'woods',
        email: 'teste@teste.com',
        password: '123',
        techs: ['node', 'react']
    });
    console.log(user);
    return res.json({ message: user });
}
exports.helloTD = helloTD;
