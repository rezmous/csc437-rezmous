import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Shoe } from "server/models";

export class ShoeViewElement extends LitElement {
  @property()
  sku?: string;

  @property({ state: true })
  shoe?: Shoe;

  connectedCallback() {
    super.connectedCallback();
    if (this.sku) {
      this.fetchShoe(this.sku);
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "sku" && oldValue !== newValue && newValue) {
      this.fetchShoe(newValue);
    }
  }

  async fetchShoe(sku: string) {
    try {
      const response = await fetch(`/api/shoes/${sku}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch shoe data: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched shoe data:", data);
      this.shoe = data;
    } catch (error) {
      console.error("Error fetching shoe data:", error);
      this.shoe = undefined;
    }
  }

  render() {
    if (!this.shoe) {
      return html`<p class="loading">Loading shoe data...</p>`;
    }

    const {
      name,
      brand,
      colorway,
      releaseDate,
      featuredImage,
      price,
      inventory,
      categories = [],
      designer,
    } = this.shoe;

    return html`
      <main class="shoe-page">
        <section class="shoe-header">
          <h1>${name}</h1>
          <p>${brand} | ${colorway}</p>
          <p>Release Date: ${new Date(releaseDate).toLocaleDateString()}</p>
        </section>
        <section class="shoe-image">
          <img src="${featuredImage}" alt="${name}" />
        </section>
        <section class="shoe-details">
          <h2>Price</h2>
          <div class="info-item">Retail: $${price.originalPrice}</div>
          ${price.marketPrice
            ? html`<div class="info-item">Market: $${price.marketPrice}</div>`
            : ""}

          <h2>Inventory</h2>
          <div class="info-item">Production: ${inventory.productionNumber}</div>
          <div class="info-item">Pairs Sold: ${inventory.pairsSold}</div>
          ${inventory.isLimitedEdition
            ? html`<div class="info-item">
                <strong>Limited Edition</strong>
              </div>`
            : ""}

          <h2>Categories</h2>
          <div class="category-buttons">
            ${categories.map(
              (category: any) =>
                html`<button class="category-btn">${category}</button>`
            )}
          </div>

          ${designer
            ? html`
                <h2>Designer</h2>
                <div class="info-item">${designer.name}</div>
              `
            : ""}

          ${designer && designer.collaborators
            ? html`
                <h2>Collaborators</h2>
                <div class="info-item">${designer.collaborators.join(", ")}</div>
              `
            : ""}
        </section>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    .shoe-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .shoe-header {
      margin-bottom: 20px;
    }

    .shoe-header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-text);
    }

    .shoe-header p {
      font-size: 1.2rem;
      color: var(--color-link);
    }

    .shoe-image img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .shoe-details {
      max-width: 800px;
      margin-top: 20px;
      text-align: left;
      width: 100%;
    }

    .shoe-details h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: var(--color-text);
    }

    .info-item {
      display: inline-block;
      background-color: var(--color-background-card);
      padding: 10px 15px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      margin: 5px;
      color: var(--color-link);
    }

    .category-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .category-btn {
      background-color: var(--color-background-card);
      padding: 10px 20px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      color: var(--color-link);
      cursor: pointer;
      font-size: 1rem;
      text-align: center;
    }

    .category-btn:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    /* Add hover effect only for Collaborators section */
    .info-item:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    .category-btn:hover {
      background-color: var(--color-link);
      color: var(--color-background-card);
    }

    @media screen and (max-width: 768px) {
      .shoe-details ul {
        grid-template-columns: 1fr;
      }

      .shoe-page {
        padding: 10px;
      }
    }
  `;}