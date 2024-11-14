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
      stylesheets: ["/styles/shoe.css"],
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
    const { price, inventory, designer, categories, featuredImage, colorway } =
      this.data;

    const categoryList = categories
      ? html`<ul class="categories">
          ${categories.map((category) => html`<li>${category}</li>`)}
        </ul>`
      : "";

    const regionList = inventory.regions
      ? html`<ul class="regions">
          ${inventory.regions.map((region) => html`<li>${region}</li>`)}
        </ul>`
      : "";

    return html`
      <section class="shoe-details">
        ${featuredImage
          ? html`<img src="${featuredImage}" alt="${this.data.name}" />`
          : ""}
        <p>Colorway: ${colorway}</p>
        <p>Price: $${price.originalPrice}</p>
        ${price.marketPrice
          ? html`<p>Market Price: $${price.marketPrice}</p>`
          : ""}
        <p>Currency: ${price.currency.symbol}</p>
        <p>Production Number: ${inventory.productionNumber}</p>
        <p>Pairs Sold: ${inventory.pairsSold}</p>
        ${regionList}
        ${inventory.isLimitedEdition
          ? html`<p><strong>Limited Edition</strong></p>`
          : ""}
        ${designer
          ? html`<p>Designer: ${designer.name}</p>
              ${designer.collaborators
                ? html`<p>
                    Collaborators: ${designer.collaborators.join(", ")}
                  </p>`
                : ""}`
          : ""}
        ${categoryList}
      </section>
    `;
  }
}