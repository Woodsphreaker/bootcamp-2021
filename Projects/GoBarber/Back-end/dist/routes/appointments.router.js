"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factories_1 = require("../factories");
var AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
var CreateAppointmentService_1 = __importDefault(require("../services/CreateAppointmentService"));
var router = factories_1.routerFactory();
var appointmentRepository = new AppointmentsRepository_1.default();
router.get('/', function (req, res) {
    res.json(appointmentRepository.listAll());
});
router.post('/', function (req, res) {
    var _a = req.body, provider = _a.provider, date = _a.date;
    try {
        var createAppointmentService = new CreateAppointmentService_1.default(appointmentRepository);
        var appointment = createAppointmentService.execute({
            date: date,
            provider: provider,
        });
        res.json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.put('/', function (req, res) {
    res.json({ message: 'route2' });
});
router.delete('/', function (req, res) {
    res.json({ message: 'route3' });
});
exports.default = router;
