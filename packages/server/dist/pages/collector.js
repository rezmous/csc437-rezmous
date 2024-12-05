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
var collector_exports = {};
__export(collector_exports, {
  CollectorPage: () => CollectorPage
});
module.exports = __toCommonJS(collector_exports);
var import_server = require("@calpoly/mustang/server");
var import_renderPage = __toESM(require("./renderPage"));
class CollectorPage {
  data;
  constructor(data) {
    this.data = data;
  }
  render() {
    return (0, import_renderPage.default)({
      body: import_server.html`
        <body>
          <mu-auth provides="sole_collection:auth">
            <header-component></header-component>
            <main class="collector-page">${this.renderBody()}</main>
          </mu-auth>
        </body>
      `,
      styles: [
        import_server.css`
          main.collector-page {
            --page-padding: 20px;
            --font-size: 1rem;
            padding: var(--page-padding);
            font-size: var(--font-size);
          }

          ul[slot="manufacturers"],
          ul[slot="shoe-models"] {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px; 
          }

          ul[slot="manufacturers"] li,
          ul[slot="shoe-models"] li {
            display: inline-block;
            background-color: var(--color-background-card);
            border: 1px solid var(--color-link);
            border-radius: 5px;
            padding: 10px 20px;
            color: var(--color-link);
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          ul[slot="manufacturers"] li:hover,
          ul[slot="shoe-models"] li:hover {
            background-color: var(--color-link);
            color: var(--color-button-text);
          }

          ul[slot="manufacturers"] li a,
          ul[slot="shoe-models"] li a {
            color: inherit;
            text-decoration: none;
          }

          @media screen and (max-width: 48rem) {
            main.collector-page {
              --page-padding: 10px;
              --font-size: 0.875rem;
            }
          }
        `
      ],
      scripts: [
        `import { define, Auth } from "@calpoly/mustang";
        import { CollectorCardElement } from "/scripts/collectorCardElement.js";
        import { HeaderElement } from "/scripts/headerElement.js";

        define({
          "collector-card": CollectorCardElement,
          "header-component": HeaderElement,
          "mu-auth": Auth.Provider,
        });`
      ]
    });
  }
  renderBody() {
    const {
      username,
      totalValue,
      quantity,
      favoriteBrand,
      manufacturers,
      shoeModels
    } = this.data;
    return import_server.html`
      <collector-card>
        <span slot="username">${username}</span>
        <span slot="total-value">$${totalValue}</span>
        <span slot="quantity">${quantity} Pairs</span>
        <span slot="favorite-brand">${favoriteBrand}</span>
        <ul slot="manufacturers">
          ${manufacturers.map(
      (manufacturer) => import_server.html`<li class="manufacturer-item">
                <a href="/Manufacturer/${manufacturer.toLowerCase()}.html"
                  >${manufacturer}</a
                >
              </li>`
    )}
        </ul>
        <ul slot="shoe-models">
          ${shoeModels.map(
      (shoe) => import_server.html`<li class="shoe-model-item">
                <a href="/shoes/${shoe.sku}">${shoe.name}</a>
              </li>`
    )}
        </ul>
      </collector-card>
    `;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CollectorPage
});
