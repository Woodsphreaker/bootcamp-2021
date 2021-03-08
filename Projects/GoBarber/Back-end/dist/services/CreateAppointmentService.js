"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var CreateAppointmentService = /** @class */ (function () {
    function CreateAppointmentService(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    CreateAppointmentService.prototype.execute = function (_a) {
        var provider = _a.provider, date = _a.date;
        var parsedDate = date_fns_1.startOfHour(date_fns_1.parseISO(date));
        var hasAppointmentInSameDay = this.appointmentRepository.findAppointmentByDate({
            date: parsedDate,
            isEqual: date_fns_1.isEqual,
        });
        if (hasAppointmentInSameDay) {
            throw new Error('This appointments is already exists');
        }
        var appointment = this.appointmentRepository.create({
            provider: provider,
            date: parsedDate,
        });
        return appointment;
    };
    return CreateAppointmentService;
}());
exports.default = CreateAppointmentService;
