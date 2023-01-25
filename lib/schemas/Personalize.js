"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personalize = void 0;
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
exports.Personalize = Joi.object().keys({
    description: Joi.string().required(),
    requiredPersonalizationFields: Joi.array()
        .items("PKPassPersonalizationFieldName", "PKPassPersonalizationFieldPostalCode", "PKPassPersonalizationFieldEmailAddress", "PKPassPersonalizationFieldPhoneNumber")
        .required(),
    termsAndConditions: Joi.string(),
});
//# sourceMappingURL=Personalize.js.map