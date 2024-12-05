"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var collector_svc_exports = {};
__export(collector_svc_exports, {
  CollectorModel: () => CollectorModel,
  default: () => collector_svc_default
});
module.exports = __toCommonJS(collector_svc_exports);
var import_mongoose = require("mongoose");
var import_shoe_svc = require("./shoe-svc");
const CollectorSchema = new import_mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    shoeCollection: { type: [String], default: [] }
  },
  { collection: "shoecollector" }
);
const CollectorModel = (0, import_mongoose.model)("Collector", CollectorSchema);
function get(username) {
  return CollectorModel.findOne({ username }).then(async (collector) => {
    if (!collector) throw new Error(`Collector ${username} not found.`);
    const shoes = await import_shoe_svc.ShoeModel.find({
      sku: { $in: collector.shoeCollection }
    });
    const totalValue = shoes.reduce((sum, shoe) => {
      return sum + (shoe.price?.marketPrice || 0);
    }, 0);
    const brandCount = shoes.reduce((acc, shoe) => {
      acc[shoe.brand] = (acc[shoe.brand] || 0) + 1;
      return acc;
    }, {});
    const favoriteBrand = Object.entries(brandCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    const shoeModels = shoes.map((shoe) => ({
      sku: shoe.sku,
      name: shoe.name
    }));
    const manufacturers = Array.from(new Set(shoes.map((shoe) => shoe.brand)));
    return {
      username: collector.username,
      totalValue,
      quantity: collector.shoeCollection.length,
      favoriteBrand,
      shoeModels,
      manufacturers
    };
  });
}
var collector_svc_default = { get };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CollectorModel
});
