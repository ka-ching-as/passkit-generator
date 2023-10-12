"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassFields = exports.TransitType = void 0;
const Joi = require("joi");
const Field_1 = require("./Field");
exports.TransitType = Joi.string().regex(/(PKTransitTypeAir|PKTransitTypeBoat|PKTransitTypeBus|PKTransitTypeGeneric|PKTransitTypeTrain)/);
exports.PassFields = Joi.object().keys({
    auxiliaryFields: Joi.array().items(Field_1.FieldWithRow),
    backFields: Joi.array().items(Field_1.Field),
    headerFields: Joi.array().items(Field_1.Field),
    primaryFields: Joi.array().items(Field_1.Field),
    secondaryFields: Joi.array().items(Field_1.Field),
    transitType: exports.TransitType,
});
//# sourceMappingURL=PassFields.js.map