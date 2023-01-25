"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beacon = void 0;
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
exports.Beacon = Joi.object().keys({
    major: Joi.number()
        .integer()
        .positive()
        .max(65535)
        .greater(Joi.ref("minor")),
    minor: Joi.number().integer().min(0).max(65535),
    proximityUUID: Joi.string().required(),
    relevantText: Joi.string(),
});
//# sourceMappingURL=Beacon.js.map