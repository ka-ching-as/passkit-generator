"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barcode = void 0;
const Joi = require("joi");
exports.Barcode = Joi.object().keys({
    altText: Joi.string(),
    messageEncoding: Joi.string().default("iso-8859-1"),
    format: Joi.string()
        .required()
        .regex(/(PKBarcodeFormatQR|PKBarcodeFormatPDF417|PKBarcodeFormatAztec|PKBarcodeFormatCode128)/, "barcodeType"),
    message: Joi.string().required(),
});
//# sourceMappingURL=Barcode.js.map