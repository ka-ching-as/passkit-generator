"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
exports.Location = Joi.object().keys({
    altitude: Joi.number(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    relevantText: Joi.string(),
});
//# sourceMappingURL=Location.js.map