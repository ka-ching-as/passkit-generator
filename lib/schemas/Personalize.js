"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personalize = void 0;
const Joi = require("joi");
exports.Personalize = Joi.object().keys({
    description: Joi.string().required(),
    requiredPersonalizationFields: Joi.array()
        .items("PKPassPersonalizationFieldName", "PKPassPersonalizationFieldPostalCode", "PKPassPersonalizationFieldEmailAddress", "PKPassPersonalizationFieldPhoneNumber")
        .required(),
    termsAndConditions: Joi.string(),
});
//# sourceMappingURL=Personalize.js.map