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
  getShoe: () => getShoe
});
module.exports = __toCommonJS(shoe_svc_exports);
const shoes = {
  yeezyBoost350: {
    sku: 67890,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    colorway: "Zebra",
    releaseDate: /* @__PURE__ */ new Date("2023-12-01"),
    featuredImage: "/images/shoes/yeezy-boost-350.jpg",
    price: {
      originalPrice: 220,
      marketPrice: 350,
      currency: {
        amount: 1,
        symbol: "$"
      }
    },
    inventory: {
      productionNumber: 1e4,
      pairsSold: 8e3,
      isLimitedEdition: true,
      regions: ["US", "EU", "CN"]
    },
    categories: ["Lifestyle", "Sneakers"],
    designer: {
      name: "Ye",
      collaborators: ["Adidas"]
    }
  }
};
function getShoe(_) {
  return shoes["yeezyBoost350"];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getShoe
});
