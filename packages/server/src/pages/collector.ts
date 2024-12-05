import { css, html } from "@calpoly/mustang/server";
import renderPage from "./renderPage";

export class CollectorPage {
  data: {
    username: string;
    totalValue: number;
    quantity: number;
    favoriteBrand: string;
  };

  constructor(data: {
    username: string;
    totalValue: number;
    quantity: number;
    favoriteBrand: string;
  }) {
    this.data = data;
  }

  render() {
    return renderPage({
      body: html`
        <body>
          <mu-auth provides="sole_collection:auth">
            <header-component></header-component>
            <main class="collector-page">${this.renderBody()}</main>
          </mu-auth>
        </body>
      `,
      styles: [
        css`
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
            display: flex;
            flex-wrap: wrap;
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
        `,
      ],
      scripts: [
        `import { define, Auth } from "@calpoly/mustang";
        import { CollectorCardElement } from "/scripts/collectorCardElement.js";
        import { HeaderElement } from "/scripts/headerElement.js";

        define({
          "collector-card": CollectorCardElement,
          "header-component": HeaderElement,
          "mu-auth": Auth.Provider,
        });`,
      ],
    });
  }

  renderBody() {
    const {
      username,
      totalValue,
      quantity,
      favoriteBrand,
      manufacturers,
      shoeModels,
    } = this.data;

    return html`
      <collector-card>
        <span slot="username">${username}</span>
        <span slot="total-value">$${totalValue}</span>
        <span slot="quantity">${quantity} Pairs</span>
        <span slot="favorite-brand">${favoriteBrand}</span>
        <ul slot="manufacturers">
          ${manufacturers.map(
            (manufacturer: string) =>
              html`<li class="manufacturer-item">
                <a href="/Manufacturer/${manufacturer.toLowerCase()}.html"
                  >${manufacturer}</a
                >
              </li>`
          )}
        </ul>
        <ul slot="shoe-models">
          ${shoeModels.map(
            (shoe: { sku: string; name: string }) =>
              html`<li class="shoe-model-item">
                <a href="/shoes/${shoe.sku}">${shoe.name}</a>
              </li>`
          )}
        </ul>
      </collector-card>
    `;
  }
}
