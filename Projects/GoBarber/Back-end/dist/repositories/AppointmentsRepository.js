"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Appointments_1 = __importDefault(require("../models/Appointments"));
var AppointmentsRepository = /** @class */ (function () {
    function AppointmentsRepository() {
        this.appointment = [];
    }
    AppointmentsRepository.prototype.listAll = function () {
        return this.appointment;
    };
    AppointmentsRepository.prototype.create = function (_a) {
        var date = _a.date, provider = _a.provider;
        var appointment = new Appointments_1.default({ provider: provider, date: date });
        this.appointment.push(appointment);
        return appointment;
    };
    AppointmentsRepository.prototype.findAppointmentByDate = function (_a) {
        var date = _a.date, isEqual = _a.isEqual;
        var foundedAppointment = this.appointment.find(function (appointment) {
            return isEqual(date, appointment.date);
        });
        return foundedAppointment || null;
    };
    return AppointmentsRepository;
}());
exports.default = AppointmentsRepository;
