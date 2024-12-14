import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Shoe } from "server/models";
import { define, Form } from "@calpoly/mustang";

export class ShoeViewElement extends LitElement {
  @property()
  sku?: string;

  @property({ state: true })
  shoe?: Shoe;

  @state()
  editMode = false;

  static uses = define({
    "mu-form": Form.Element,
  });


  toggleEditMode() {
    this.editMode = !this.editMode;
  }
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

  async handleEditSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const updatedFields = {
      price: {
        originalPrice: parseFloat(
          (form.elements.namedItem("originalPrice") as HTMLInputElement)?.value
        ),
        marketPrice: parseFloat(
          (form.elements.namedItem("marketPrice") as HTMLInputElement)?.value
        ),
      },
      inventory: {
        productionNumber: parseInt(
          (form.elements.namedItem("productionNumber") as HTMLInputElement)
            ?.value
        ),
        pairsSold: parseInt(
          (form.elements.namedItem("pairsSold") as HTMLInputElement)?.value
        ),
      },
    };

    try {
      const response = await fetch(`/api/shoes/${this.sku}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...this.shoe, ...updatedFields }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update shoe: ${response.status}`);
      }

      this.shoe = await response.json();
      this.editMode = false;
    } catch (error) {
      console.error("Error updating shoe:", error);
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
      designer,
    } = this.shoe;

    return html`
      <div class="shoe-card">
        <img src="${featuredImage}" alt="${name}" class="shoe-image" />
        <div class="shoe-content">
          ${this.editMode
            ? html`
                <form @submit=${this.handleEditSubmit}>
                  <h2>Edit Shoe Details</h2>
                  <label>
                    Original Price:
                    <input
                      type="number"
                      name="originalPrice"
                      value="${price.originalPrice}"
                      required
                    />
                  </label>
                  <label>
                    Market Price:
                    <input
                      type="number"
                      name="marketPrice"
                      value="${price.marketPrice || ""}"
                    />
                  </label>
                  <label>
                    Production Number:
                    <input
                      type="number"
                      name="productionNumber"
                      value="${inventory.productionNumber}"
                      required
                    />
                  </label>
                  <label>
                    Pairs Sold:
                    <input
                      type="number"
                      name="pairsSold"
                      value="${inventory.pairsSold}"
                      required
                    />
                  </label>
                  <div class="button-group">
                    <button type="submit" class="button save">Save</button>
                    <button
                      type="button"
                      @click=${this.toggleEditMode}
                      class="button cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              `
            : html`
                <h1 class="shoe-title">${name}</h1>
                <p class="shoe-meta">${brand} | ${colorway}</p>
                <p class="shoe-meta">
                  Release Date: ${new Date(releaseDate).toLocaleDateString()}
                </p>

                <div class="designer-collaborator-row">
                  <div class="designer-section">
                    <h2>Designer</h2>
                    <a
                      href="/designer/${designer?.name.toLowerCase()}"
                      class="button"
                    >
                      ${designer?.name}
                    </a>
                  </div>
                  ${designer?.collaborators
                    ? html`
                        <div class="collaborator-section">
                          <h2>Collaborators</h2>
                          <a
                            href="/manufacturer/${designer.collaborators
                              .join(", ")
                              .toLowerCase()}"
                            class="button"
                          >
                            ${designer.collaborators.join(", ")}
                          </a>
                        </div>
                      `
                    : ""}
                </div>

                <div class="shoe-section">
                  <h2>Price</h2>
                  <div class="comparison-row">
                    <div>
                      <span class="label">Retail:</span>
                      <span class="value">$${price.originalPrice}</span>
                    </div>
                    ${price.marketPrice
                      ? html`
                          <div>
                            <span class="label">Market:</span>
                            <span class="value">$${price.marketPrice}</span>
                          </div>
                        `
                      : ""}
                  </div>
                </div>

                <div class="shoe-section">
                  <h2>Inventory</h2>
                  <div class="comparison-row">
                    <div>
                      <span class="label">Production:</span>
                      <span class="value">${inventory.productionNumber}</span>
                    </div>
                    <div>
                      <span class="label">Pairs Sold:</span>
                      <span class="value">${inventory.pairsSold}</span>
                    </div>
                  </div>
                  ${inventory.isLimitedEdition
                    ? html`<p><strong>Limited Edition</strong></p>`
                    : ""}
                </div>

                <button class="button edit" @click=${this.toggleEditMode}>
                  Edit
                </button>
              `}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Montserrat", sans-serif;
      background-color: var(--color-background-page);
      padding: 20px;
      color: var(--color-text);
    }

    .shoe-card {
      display: flex;
      align-items: flex-start;
      background-color: var(--color-background-card);
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      gap: 20px;
    }

    .shoe-image {
      flex: 1 1 40%;
      max-width: 40%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      object-fit: contain;
    }

    .shoe-content {
      flex: 1 1 55%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .shoe-title {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 8px;
      color: var(--color-text);
    }

    .shoe-meta {
      font-size: 0.9rem;
      color: var(--color-link);
      margin: 3px 0;
    }

    .designer-collaborator-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    .designer-section,
    .collaborator-section {
      flex: 1;
      text-align: center;
    }

    .designer-section h2,
    .collaborator-section h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: var(--color-link);
    }

    .shoe-section {
      margin-top: 10px;
    }

    .shoe-section h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: var(--color-link);
    }

    .comparison-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 8px;
    }

    .comparison-row > div {
      flex: 1;
      text-align: center;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      padding: 10px;
      background-color: var(--color-background-page);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .comparison-row .label {
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--color-accent);
    }

    .comparison-row .value {
      font-size: 1rem;
      font-weight: bold;
      color: var(--color-text);
      display: block;
      margin-top: 5px;
    }

    .button {
      display: inline-block;
      text-align: center;
      padding: 8px 12px;
      background-color: var(--color-link);
      color: var(--color-background-page);
      text-decoration: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .button:hover {
      background-color: var(--color-accent);
      color: var(--color-background-card);
    }

    @media screen and (max-width: 768px) {
      .shoe-card {
        flex-direction: column;
      }

      .shoe-image {
        max-width: 200px;
        object-fit: cover;
      }

      .designer-collaborator-row {
        flex-direction: column;
        gap: 10px;
      }

      .comparison-row {
        flex-direction: column;
        gap: 10px;
      }
    }

    .shoe-card form label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .shoe-card form input {
      padding: 8px;
      margin-top: 5px;
      border: 1px solid var(--color-accent);
      border-radius: 5px;
    }

    .shoe-card form button {
      margin-top: 10px;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background-color: var(--color-link);
      color: white;
      cursor: pointer;
    }

    .shoe-card form button:hover {
      background-color: var(--color-accent);
    }
  `;
}
