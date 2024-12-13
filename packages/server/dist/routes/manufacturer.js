"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var manufacturer_exports = {};
__export(manufacturer_exports, {
  default: () => manufacturer_default
});
module.exports = __toCommonJS(manufacturer_exports);
var import_express = __toESM(require("express"));
var import_manufacturer_svc = __toESM(require("../services/manufacturer-svc"));
const router = import_express.default.Router();
router.get("/", async (req, res) => {
  try {
    const manufacturers = await import_manufacturer_svc.default.index();
    res.status(200).json({ data: manufacturers });
  } catch (err) {
    console.error("Failed to fetch manufacturers:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const manufacturer = await import_manufacturer_svc.default.get(name);
    res.status(200).json(manufacturer);
  } catch (err) {
    console.error(`Manufacturer ${name} not found:`, err);
    res.status(404).send({ error: `Manufacturer ${name} not found` });
  }
});
router.post("/", async (req, res) => {
  const { name, logo, href } = req.body;
  if (!name || !logo || !href) {
    return res.status(400).send({ error: "Name, logo, and href are required." });
  }
  try {
    const newManufacturer = await import_manufacturer_svc.default.create({ name, logo, href });
    res.status(201).json(newManufacturer);
  } catch (err) {
    console.error("Failed to create manufacturer:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
router.put("/:name", async (req, res) => {
  const { name } = req.params;
  const updateData = req.body;
  try {
    const updatedManufacturer = await import_manufacturer_svc.default.update(name, updateData);
    res.status(200).json(updatedManufacturer);
  } catch (err) {
    console.error(`Failed to update manufacturer ${name}:`, err);
    res.status(404).send({ error: `Failed to update manufacturer ${name}` });
  }
});
router.delete("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    await import_manufacturer_svc.default.remove(name);
    res.status(204).send();
  } catch (err) {
    console.error(`Failed to delete manufacturer ${name}:`, err);
    res.status(404).send({ error: `Failed to delete manufacturer ${name}` });
  }
});
var manufacturer_default = router;
