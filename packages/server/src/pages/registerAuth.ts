import { css, html } from "@calpoly/mustang/server";
import renderPage from "./renderPage";

export class RegisterPage {
  render() {
    return renderPage({
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
          `,
      ],
      styles: [css``],
      body: html`
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
      `,
    });
  }
}
