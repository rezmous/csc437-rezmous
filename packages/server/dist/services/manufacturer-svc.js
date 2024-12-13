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
var manufacturer_svc_exports = {};
__export(manufacturer_svc_exports, {
  ManufacturerModel: () => ManufacturerModel,
  default: () => manufacturer_svc_default
});
module.exports = __toCommonJS(manufacturer_svc_exports);
var import_mongoose = require("mongoose");
const ManufacturerSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    logo: { type: String, required: true },
    href: { type: String, required: true }
  },
  { collection: "manufacturers" }
);
const ManufacturerModel = (0, import_mongoose.model)(
  "Manufacturer",
  ManufacturerSchema
);
function index() {
  return ManufacturerModel.find();
}
function get(name) {
  return ManufacturerModel.findOne({ name }).then((manufacturer) => {
    if (!manufacturer) throw `Manufacturer ${name} Not Found`;
    return manufacturer;
  });
}
function create(manufacturer) {
  const newManufacturer = new ManufacturerModel(manufacturer);
  return newManufacturer.save();
}
function update(name, manufacturer) {
  return ManufacturerModel.findOneAndUpdate({ name }, manufacturer, {
    new: true
  }).then((updatedManufacturer) => {
    if (!updatedManufacturer) throw `Manufacturer ${name} Not Found`;
    return updatedManufacturer;
  });
}
function remove(name) {
  return ManufacturerModel.findOneAndDelete({ name }).then(
    (deletedManufacturer) => {
      if (!deletedManufacturer) throw `Manufacturer ${name} Not Found`;
    }
  );
}
var manufacturer_svc_default = { index, get, create, update, remove };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ManufacturerModel
});
