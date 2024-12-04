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
var registerAuth_exports = {};
__export(registerAuth_exports, {
  RegisterPage: () => RegisterPage
});
module.exports = __toCommonJS(registerAuth_exports);
var import_server = require("@calpoly/mustang/server");
var import_renderPage = __toESM(require("./renderPage"));
class RegisterPage {
  render() {
    return (0, import_renderPage.default)({
      scripts: [
        `
          import { define, Auth } from "@calpoly/mustang";
          import { RegisterForm } from "/scripts/register-form.js";
          import { HeaderElement } from "/scripts/headerElement.js";
  
          define({
            "mu-auth": Auth.Provider,
            "register-form": RegisterForm,
            "header-component": HeaderElement
          })
          `
      ],
      styles: [import_server.css``],
      body: import_server.html`
        <body>
          <mu-auth provides="sole_collection:auth">
            <article>
              <header-component></header-component>
              <main class="page">
                <register-form api="/auth/register">
                  <h3 slot="title">Register and start your journey!</h3>
                </register-form>
                <p class="register">
                  Already have an account?
                  <a href="./login">Sign in</a>
                </p>
              </main>
            </article>
          </mu-auth>
        </body>
      `
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RegisterPage
});
