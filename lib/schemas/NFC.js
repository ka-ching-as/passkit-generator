"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFC = void 0;
const Joi = require("joi");
exports.NFC = Joi.object().keys({
    message: Joi.string().required().max(64),
    encryptionPublicKey: Joi.string().required(),
    requiresAuthentication: Joi.boolean(),
});
//# sourceMappingURL=NFC.js.map