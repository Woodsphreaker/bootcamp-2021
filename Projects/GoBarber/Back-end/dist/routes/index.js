"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factories_1 = require("../factories");
var appointments_router_1 = __importDefault(require("./appointments.router"));
var router = factories_1.routerFactory();
router.use('/appointments', appointments_router_1.default);
exports.default = router;
