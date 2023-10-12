"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beacon = void 0;
const Joi = require("joi");
exports.Beacon = Joi.object().keys({
    major: Joi.number().integer().min(0).max(65535),
    minor: Joi.number().integer().min(0).max(65535),
    proximityUUID: Joi.string().required(),
    relevantText: Joi.string(),
});
//# sourceMappingURL=Beacon.js.map