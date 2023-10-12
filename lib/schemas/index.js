"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterValid = exports.validate = exports.assertValidity = exports.Template = exports.PassProps = exports.OverridablePassProps = exports.PassType = exports.PassKindsProps = exports.PassPropsFromMethods = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./Barcode"), exports);
tslib_1.__exportStar(require("./Beacon"), exports);
tslib_1.__exportStar(require("./Location"), exports);
tslib_1.__exportStar(require("./Field"), exports);
tslib_1.__exportStar(require("./NFC"), exports);
tslib_1.__exportStar(require("./Semantics"), exports);
tslib_1.__exportStar(require("./PassFields"), exports);
tslib_1.__exportStar(require("./Personalize"), exports);
tslib_1.__exportStar(require("./Certificates"), exports);
const Joi = require("joi");
const Barcode_1 = require("./Barcode");
const Location_1 = require("./Location");
const Beacon_1 = require("./Beacon");
const NFC_1 = require("./NFC");
const PassFields_1 = require("./PassFields");
const Semantics_1 = require("./Semantics");
const Messages = require("../messages");
const RGB_COLOR_REGEX = /rgb\(\s*(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\s*,\s*(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\s*,\s*(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\s*\)/;
exports.PassPropsFromMethods = Joi.object({
    nfc: NFC_1.NFC,
    beacons: Joi.array().items(Beacon_1.Beacon),
    barcodes: Joi.array().items(Barcode_1.Barcode),
    relevantDate: Joi.string().isoDate(),
    expirationDate: Joi.string().isoDate(),
    locations: Joi.array().items(Location_1.Location),
});
exports.PassKindsProps = Joi.object({
    coupon: PassFields_1.PassFields.disallow("transitType"),
    generic: PassFields_1.PassFields.disallow("transitType"),
    storeCard: PassFields_1.PassFields.disallow("transitType"),
    eventTicket: PassFields_1.PassFields.disallow("transitType"),
    boardingPass: PassFields_1.PassFields,
});
exports.PassType = Joi.string().regex(/(boardingPass|coupon|eventTicket|storeCard|generic)/);
exports.OverridablePassProps = Joi.object({
    formatVersion: Joi.number().default(1),
    semantics: Semantics_1.Semantics,
    voided: Joi.boolean(),
    logoText: Joi.string(),
    description: Joi.string(),
    serialNumber: Joi.string(),
    appLaunchURL: Joi.string(),
    teamIdentifier: Joi.string(),
    organizationName: Joi.string(),
    passTypeIdentifier: Joi.string(),
    sharingProhibited: Joi.boolean(),
    groupingIdentifier: Joi.string(),
    suppressStripShine: Joi.boolean(),
    maxDistance: Joi.number().positive(),
    authenticationToken: Joi.string().min(16),
    labelColor: Joi.string().regex(RGB_COLOR_REGEX),
    backgroundColor: Joi.string().regex(RGB_COLOR_REGEX),
    foregroundColor: Joi.string().regex(RGB_COLOR_REGEX),
    associatedStoreIdentifiers: Joi.array().items(Joi.number()),
    userInfo: Joi.alternatives(Joi.object().unknown(), Joi.array()),
    // parsing url as set of words and nums followed by dots, optional port and any possible path after
    webServiceURL: Joi.string().regex(/https?:\/\/(?:[a-z0-9]+\.?)+(?::\d{2,})?(?:\/[\S]+)*/),
}).with("webServiceURL", "authenticationToken");
exports.PassProps = Joi.object()
    .concat(exports.OverridablePassProps)
    .concat(exports.PassKindsProps)
    .concat(exports.PassPropsFromMethods);
exports.Template = Joi.object({
    model: Joi.string().required(),
    certificates: Joi.object().required(),
});
// --------- UTILITIES ---------- //
/**
 * Performs validation of a schema on an object.
 * If it fails, will throw an error.
 *
 * @param schema
 * @param data
 */
function assertValidity(schema, data, customErrorMessage) {
    const validation = schema.validate(data);
    if (validation.error) {
        if (customErrorMessage) {
            console.warn(validation.error);
            throw new TypeError(`${validation.error.name} happened. ${Messages.format(customErrorMessage, validation.error.message)}`);
        }
        throw new TypeError(validation.error.message);
    }
}
exports.assertValidity = assertValidity;
/**
 * Performs validation and throws the error if there's one.
 * Otherwise returns a (possibly patched) version of the specified
 * options (it depends on the schema)
 *
 * @param schema
 * @param options
 * @returns
 */
function validate(schema, options) {
    const validationResult = schema.validate(options, {
        stripUnknown: true,
        abortEarly: true,
    });
    if (validationResult.error) {
        throw validationResult.error;
    }
    return validationResult.value;
}
exports.validate = validate;
function filterValid(schema, source) {
    if (!source) {
        return [];
    }
    return source.reduce((acc, current) => {
        try {
            return [...acc, validate(schema, current)];
        }
        catch (err) {
            console.warn(Messages.format(Messages.FILTER_VALID.INVALID, err));
            return [...acc];
        }
    }, []);
}
exports.filterValid = filterValid;
//# sourceMappingURL=index.js.map