"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesSchema = void 0;
const buffer_1 = require("buffer");
const Joi = require("joi");
/**
 * Joi.binary is not available in browser-like environments (like Cloudflare workers)
 * so we fallback to manual checking. Buffer must be polyfilled.
 */
const binary = Joi.binary
    ? Joi.binary()
    : Joi.custom((obj) => buffer_1.Buffer.isBuffer(obj));
exports.CertificatesSchema = Joi.object()
    .keys({
    wwdr: Joi.alternatives(binary, Joi.string()).required(),
    signerCert: Joi.alternatives(binary, Joi.string()).required(),
    signerKey: Joi.alternatives(binary, Joi.string()).required(),
    signerKeyPassphrase: Joi.string(),
})
    .required();
//# sourceMappingURL=Certificates.js.map