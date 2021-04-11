"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    var payload = {
        name: name,
        email: email,
        password: password
    };
    return payload;
}
exports.default = createUser;
