"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldWithRow = exports.Field = void 0;
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
const Semantics_1 = require("./Semantics");
exports.Field = Joi.object().keys({
    attributedValue: Joi.alternatives(Joi.string().allow(""), Joi.number(), Joi.date().iso()),
    changeMessage: Joi.string(),
    dataDetectorTypes: Joi.array().items(Joi.string().regex(/(PKDataDetectorTypePhoneNumber|PKDataDetectorTypeLink|PKDataDetectorTypeAddress|PKDataDetectorTypeCalendarEvent)/, "dataDetectorType")),
    label: Joi.string().allow(""),
    textAlignment: Joi.string().regex(/(PKTextAlignmentLeft|PKTextAlignmentCenter|PKTextAlignmentRight|PKTextAlignmentNatural)/, "graphic-alignment"),
    key: Joi.string().required(),
    value: Joi.alternatives(Joi.string().allow(""), Joi.number(), Joi.date().iso()).required(),
    semantics: Semantics_1.Semantics,
    // date fields formatters, all optionals
    dateStyle: Joi.string().regex(/(PKDateStyleNone|PKDateStyleShort|PKDateStyleMedium|PKDateStyleLong|PKDateStyleFull)/, "date style"),
    ignoresTimeZone: Joi.boolean(),
    isRelative: Joi.boolean(),
    timeStyle: Joi.string().regex(/(PKDateStyleNone|PKDateStyleShort|PKDateStyleMedium|PKDateStyleLong|PKDateStyleFull)/, "date style"),
    // number fields formatters, all optionals
    currencyCode: Joi.string().when("value", {
        is: Joi.number(),
        otherwise: Joi.string().forbidden(),
    }),
    numberStyle: Joi.string()
        .regex(/(PKNumberStyleDecimal|PKNumberStylePercent|PKNumberStyleScientific|PKNumberStyleSpellOut)/)
        .when("value", {
        is: Joi.number(),
        otherwise: Joi.string().forbidden(),
    }),
});
exports.FieldWithRow = exports.Field.concat(Joi.object().keys({
    row: Joi.number().min(0).max(1),
}));
//# sourceMappingURL=Field.js.map