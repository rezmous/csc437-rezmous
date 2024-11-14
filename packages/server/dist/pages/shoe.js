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
var shoe_exports = {};
__export(shoe_exports, {
  ShoePage: () => ShoePage
});
module.exports = __toCommonJS(shoe_exports);
var import_server = require("@calpoly/mustang/server");
var import_renderPage = __toESM(require("./renderPage"));
class ShoePage {
  data;
  constructor(data) {
    this.data = data;
  }
  render() {
    return (0, import_renderPage.default)({
      body: import_server.html`
        <body>
          <header-component></header-component>
          <main class="shoe-page">${this.renderBody()}</main>
        </body>
      `,
      stylesheets: ["/styles/shoe.css"],
      styles: [
        import_server.css`
          main.shoe-page {
            --page-padding: 20px;
            --font-size: 1rem;
            @media screen and (max-width: 48rem) {
              --page-padding: 10px;
              --font-size: 0.875rem;
            }
          }
        `
      ],
      scripts: [
        `import { define } from "@calpoly/mustang";
        import { ShoeCardElement } from "/scripts/shoeCardElement.js";
        import { HeaderElement } from "/scripts/headerElement.js";

        define({
          "shoe-card": ShoeCardElement,
          "header-component": HeaderElement
        });`
      ]
    });
  }
  renderBody() {
    const { price, inventory, designer, categories, featuredImage, colorway } = this.data;
    const categoryList = categories ? import_server.html`<ul class="categories">
          ${categories.map((category) => import_server.html`<li>${category}</li>`)}
        </ul>` : "";
    const regionList = inventory.regions ? import_server.html`<ul class="regions">
          ${inventory.regions.map((region) => import_server.html`<li>${region}</li>`)}
        </ul>` : "";
    return import_server.html`
      <section class="shoe-details">
        ${featuredImage ? import_server.html`<img src="${featuredImage}" alt="${this.data.name}" />` : ""}
        <p>Colorway: ${colorway}</p>
        <p>Price: $${price.originalPrice}</p>
        ${price.marketPrice ? import_server.html`<p>Market Price: $${price.marketPrice}</p>` : ""}
        <p>Currency: ${price.currency.symbol}</p>
        <p>Production Number: ${inventory.productionNumber}</p>
        <p>Pairs Sold: ${inventory.pairsSold}</p>
        ${regionList}
        ${inventory.isLimitedEdition ? import_server.html`<p><strong>Limited Edition</strong></p>` : ""}
        ${designer ? import_server.html`<p>Designer: ${designer.name}</p>
              ${designer.collaborators ? import_server.html`<p>
                    Collaborators: ${designer.collaborators.join(", ")}
                  </p>` : ""}` : ""}
        ${categoryList}
      </section>
    `;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShoePage
});
