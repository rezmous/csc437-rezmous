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
var shoe_svc_exports = {};
__export(shoe_svc_exports, {
  ShoeModel: () => ShoeModel,
  default: () => shoe_svc_default
});
module.exports = __toCommonJS(shoe_svc_exports);
var import_mongoose = require("mongoose");
const ShoeSchema = new import_mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    colorway: String,
    releaseDate: Date,
    featuredImage: String,
    price: {
      originalPrice: Number,
      marketPrice: Number,
      currency: {
        amount: Number,
        symbol: String
      }
    },
    inventory: {
      productionNumber: Number,
      pairsSold: Number,
      isLimitedEdition: Boolean,
      regions: [String]
    },
    categories: [String],
    designer: {
      name: String,
      collaborators: [String]
    }
  },
  { collection: "shoes" }
);
const ShoeModel = (0, import_mongoose.model)("Shoe", ShoeSchema);
function index() {
  return ShoeModel.find();
}
function get(sku) {
  return ShoeModel.findOne({ sku }).then((shoe) => {
    if (!shoe) throw `Shoe with SKU ${sku} Not Found`;
    return shoe;
  });
}
function create(shoe) {
  const newShoe = new ShoeModel(shoe);
  return newShoe.save();
}
function update(sku, shoe) {
  return ShoeModel.findOneAndUpdate({ sku }, shoe, { new: true }).then(
    (updatedShoe) => {
      if (!updatedShoe) throw `Shoe with SKU ${sku} Not Found`;
      return updatedShoe;
    }
  );
}
function remove(sku) {
  return ShoeModel.findOneAndDelete({ sku }).then((deletedShoe) => {
    if (!deletedShoe) throw `Shoe with SKU ${sku} Not Found`;
  });
}
var shoe_svc_default = { index, get, create, update, remove };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShoeModel
});
