import { css, html, shadow, Observer } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class ShoeCardElement extends HTMLElement {
  static template = html`
    <template>
      <article class="shoe-card">
        <header>
          <h2><slot name="name">Shoe Model</slot></h2>
          <figure>
            <img slot="featured-image" src="" alt="Shoe Image" />
          </figure>
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
          <h3 class="collaborators-title">Collaborators</h3>
          <p><slot name="collaborators">None</slot></p>
        </section>
        <section class="categories-info">
          <h3>Categories</h3>
          <ul>
            <li><slot name="categories">Categories</slot></li>
          </ul>
        </section>
      </article>
    </template>
  `;

  static styles = css`
    .shoe-card {
      display: grid;
      grid-template-areas:
        "header header header"
        "image image image"
        "info info info"
        "inventory designer categories";
      gap: 1rem;
      padding: 1rem;
      background-color: var(--color-background-card);
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 1000px;
      max-height: 80vh;
      margin: 1rem auto;
      font-family: "Montserrat", sans-serif;
      color: var(--color-text);
    }

    .shoe-card header {
      grid-area: header;
      text-align: center;
    }

    .shoe-card header h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    figure {
      grid-area: image;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    figure img {
      width: auto;
      max-width: 250px;
      max-height: 150px;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .shoe-info,
    .inventory-info,
    .designer-info,
    .categories-info {
      background-color: var(--color-background-page);
      padding: 0.75rem;
      font-size: 0.8rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .shoe-info {
      grid-area: info;
      display: flex;
      justify-content: space-between;
    }

    .shoe-info dl {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      text-align: center;
    }

    .shoe-info dt,
    .shoe-info dd {
      margin: 0;
      font-size: 1rem;
    }

    .shoe-info dt {
      font-weight: bold;
      color: var(--color-link); /* Light blue */
    }

    .shoe-info dd {
      color: var(--color-text);
    }

    .inventory-info {
      grid-area: inventory;
    }

    .inventory-info h3,
    .designer-info h3,
    .categories-info h3 {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--color-link); /* Light blue for headers */
      margin-bottom: 0.5rem;
    }

    .inventory-info dl,
    .designer-info p,
    .categories-info ul li {
      color: var(--color-text); /* Regular text color */
    }

    .inventory-info dt {
      font-weight: bold;
    }

    .designer-info {
      grid-area: designer;
    }

    .categories-info {
      grid-area: categories;
      text-align: center;
    }

    .categories-info ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .categories-info ul li {
      font-size: 0.8rem;
      font-weight: bold;
      color: var(--color-text); /* Regular text color */
    }

    @media (max-width: 768px) {
      .shoe-card {
        grid-template-areas:
          "header"
          "image"
          "info"
          "inventory"
          "designer"
          "categories";
        grid-template-columns: 1fr;
        max-height: 90vh;
      }

      .shoe-info {
        flex-direction: column;
        gap: 1rem;
      }

      .inventory-info,
      .designer-info,
      .categories-info {
        width: 100%;
      }
    }
  `;

  constructor() {
    super();
    shadow(this)
      .template(ShoeCardElement.template)
      .styles(reset.styles, ShoeCardElement.styles);
  }

  get src() {
    return this.getAttribute("src");
  }

  _authObserver = new Observer(this, "sole_collection:auth");

  get authorization() {
    if (this._user?.authenticated) {
      return { Authorization: `Bearer ${this._user.token}` };
    } else {
      console.warn("No authenticated user; returning empty headers");
      return {};
    }
  }

  connectedCallback() {
    this._authObserver.observe(({ user }) => {
      this._user = user;
      if (user && user.authenticated && this.src) {
        this.hydrate(this.src);
      }
    });
  }

  hydrate(url) {
    if (!this._user || !this._user.authenticated) {
      console.error("No authenticated user; cannot fetch data.");
      return;
    }

    const headers = {
      Authorization: `Bearer ${this._user.token}`,
    };

    console.log("Headers being sent:", headers);

    fetch(url, { headers })
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
        const imageSlot = this.shadowRoot.querySelector(
          'img[slot="featured-image"]'
        );
        imageSlot.src = data.featuredImage;
        return html` <img
          slot="featured-image"
          src="https://example.com/image.png"
          alt="Shoe Image"
        />`;
      }

      return html`<span slot="${key}">${value}</span>`;
    };

    const fragment = entries.map(toSlot);
    this.replaceChildren(...fragment);
  }
}
