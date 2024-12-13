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
          <p>Retail: $${price.originalPrice}</p>
          ${price.marketPrice ? html`<p>Market: $${price.marketPrice}</p>` : ""}
          <h2>Inventory</h2>
          <p>Production: ${inventory.productionNumber}</p>
          <p>Pairs Sold: ${inventory.pairsSold}</p>
          ${inventory.isLimitedEdition
            ? html`<p><strong>Limited Edition</strong></p>`
            : ""}
          <h2>Categories</h2>
          <ul>
            ${categories.map((category: any) => html`<li>${category}</li>`)}
          </ul>
          ${designer
            ? html`
                <h2>Designer</h2>
                <p>${designer.name}</p>
                ${designer.collaborators
                  ? html`<p>
                      Collaborators: ${designer.collaborators.join(", ")}
                    </p>`
                  : ""}
              `
            : ""}
        </section>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    .shoe-page {
      padding: 20px;
      font-family: "Montserrat", sans-serif;
    }

    .shoe-header {
      text-align: center;
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
      margin-top: 20px;
    }

    .shoe-details h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: var(--color-text);
    }

    .shoe-details p {
      margin-bottom: 10px;
      color: var(--color-link);
    }

    .shoe-details ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }

    .shoe-details ul li {
      background-color: var(--color-background-card);
      padding: 10px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      text-align: center;
      color: var(--color-link);
    }

    @media screen and (max-width: 768px) {
      .shoe-details ul {
        grid-template-columns: 1fr;
      }
    }
  `;
}
