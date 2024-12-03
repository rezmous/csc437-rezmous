import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class ShoeCardElement extends HTMLElement {
  static template = html`
    <template>
      <article class="shoe-card">
        <header>
          <h2><slot name="name">Shoe Model</slot></h2>
        </header>
        <section class="shoe-info">
          <dl>
            <dt>Brand</dt>
            <dd><slot name="brand">Brand Name</slot></dd>
            <dt>Colorway</dt>
            <dd><slot name="colorway">Colorway</slot></dd>
            <dt>Retail Price</dt>
            <dd><slot name="retail-price">$0</slot></dd>
            <dt>Market Price</dt>
            <dd><slot name="market-price">$0</slot></dd>
            <dt>Scarcity</dt>
            <dd><slot name="scarcity">Common</slot></dd>
          </dl>
        </section>
        <section class="inventory-info">
          <h3>Inventory</h3>
          <dl>
            <dt>Production Number</dt>
            <dd><slot name="production-number">0</slot></dd>
            <dt>Pairs Sold</dt>
            <dd><slot name="pairs-sold">0</slot></dd>
            <dt>Regions</dt>
            <dd><slot name="regions">Regions</slot></dd>
          </dl>
        </section>
        <section class="designer-info">
          <h3>Designer</h3>
          <p><slot name="designer">Designer Name</slot></p>
          <p>Collaborators: <slot name="collaborators">None</slot></p>
        </section>
        <section class="categories-info">
          <h3>Categories</h3>
          <ul>
            <li><slot name="categories">Categories</slot></li>
          </ul>
        </section>
        <figure>
          <img slot="featured-image" alt="Shoe Image" />
        </figure>
      </article>
    </template>
  `;

  static styles = css``;

  constructor() {
    super();
    shadow(this)
      .template(ShoeCardElement.template)
      .styles(reset.styles, ShoeCardElement.styles);
  }

  get src() {
    return this.getAttribute("src");
  }

  connectedCallback() {
    if (this.src) this.hydrate(this.src);
  }

  hydrate(url) {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) throw new Error(`Status: ${res.status}`);
        return res.json();
      })
      .then((data) => this.renderSlots(data))
      .catch((error) =>
        console.error(`Failed to fetch data from ${url}:`, error)
      );
  }

  renderSlots(data) {
    const entries = Object.entries(data);

    const toSlot = ([key, value]) => {
      if (key === "price") {
        return html`
          <span slot="retail-price">$${value.originalPrice}</span>
          <span slot="market-price">$${value.marketPrice}</span>
        `;
      }

      if (key === "inventory") {
        const scarcity = value.isLimitedEdition ? "Limited Edition" : "Common";
        const regionsList = value.regions ? value.regions.join(", ") : "N/A";
        return html`
          <span slot="scarcity">${scarcity}</span>
          <span slot="production-number">${value.productionNumber}</span>
          <span slot="pairs-sold">${value.pairsSold}</span>
          <span slot="regions">${regionsList}</span>
        `;
      }

      if (key === "designer") {
        const collaborators = value.collaborators
          ? value.collaborators.join(", ")
          : "None";
        return html`
          <span slot="designer">${value.name}</span>
          <span slot="collaborators">${collaborators}</span>
        `;
      }

      if (key === "categories") {
        const categoryList = value.join(", ");
        return html`<span slot="categories">${categoryList}</span>`;
      }

      if (key === "featuredImage") {
        return html`
          <img slot="featured-image" src="${value}" alt="${data.name}" />
        `;
      }

      return html`<span slot="${key}">${value}</span>`;
    };

    const fragment = entries.map(toSlot);
    this.replaceChildren(...fragment);
  }
}
