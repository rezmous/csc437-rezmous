import { css, html } from "@calpoly/mustang/server";
import { Shoe } from "../models";
import renderPage from "./renderPage";

export class ShoePage {
  data: Shoe;

  constructor(data: Shoe) {
    this.data = data;
  }

  render() {
    return renderPage({
      body: html`
        <body>
          <header-component></header-component>
          <main class="shoe-page">${this.renderBody()}</main>
        </body>
      `,
      styles: [
        css`
          main.shoe-page {
            --page-padding: 20px;
            --font-size: 1rem;
            @media screen and (max-width: 48rem) {
              --page-padding: 10px;
              --font-size: 0.875rem;
            }
          }
        `,
      ],
      scripts: [
        `import { define } from "@calpoly/mustang";
        import { ShoeCardElement } from "/scripts/shoeCardElement.js";
        import { HeaderElement } from "/scripts/headerElement.js";

        define({
          "shoe-card": ShoeCardElement,
          "header-component": HeaderElement
        });`,
      ],
    });
  }

  renderBody() {
    const { sku } = this.data;

    return html`
      <shoe-card src="/api/shoes/${sku}">
      </shoe-card>
    `;
  }
}
