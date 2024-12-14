import { View } from "@calpoly/mustang";
import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Collector } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class CollectorViewElement extends View<Model, Msg> {
  @property({ attribute: "username", reflect: true })
  username = "";

  @state()
  get collector(): Collector | undefined {
    return this.model.collector;
  }

  constructor() {
    super("sole_collection:model");
  }

  // React to username changes
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "username" && oldValue !== newValue && newValue) {
      console.log(
        `Dispatching message to fetch collector data for: ${newValue}`
      );
      this.dispatchMessage(["collector/select", { username: newValue }]);
    }
  }

  render() {
    if (!this.collector) {
      return html`<p class="loading">Loading collector data...</p>`;
    }

    const {
      username,
      shoeModels = [],
      totalValue = 0,
      quantity = 0,
      manufacturers = [],
    } = this.collector;

    return html`
      <div class="collector-card">
        <div class="collector-content">
          <h1 class="collector-title">${username}'s Collection</h1>
          <div class="comparison-row">
            <div>
              <span class="label">Total Value:</span>
              <span class="value">$${totalValue.toLocaleString()}</span>
            </div>
            <div>
              <span class="label">Total Pairs:</span>
              <span class="value">${quantity}</span>
            </div>
          </div>
          <div class="manufacturer-section">
            <h2>Manufacturers</h2>
            <ul>
              ${manufacturers.map(
                (manufacturer) => html`
                  <li>
                    <a href="/manufacturer/${manufacturer.toLowerCase()}"
                      >${manufacturer}</a
                    >
                  </li>
                `
              )}
            </ul>
          </div>
          <div class="shoe-section">
            <h2>Shoe Models</h2>
            <ul>
              ${shoeModels.map(
                (shoe) => html`
                  <li>
                    <a href="/shoes/${shoe.sku}">${shoe.name}</a>
                  </li>
                `
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-background-page);
      padding: 20px;
      box-sizing: border-box;
    }

    .collector-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-background-card);
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      width: 100%;
      padding: 10px;
      gap: 10px;
    }

    .collector-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    .collector-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      color: var(--color-text);
      margin-bottom: 8px;
    }

    .comparison-row {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    .comparison-row > div {
      flex: 1;
      text-align: center;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      padding: 12px;
      background-color: var(--color-background-page);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .comparison-row .label {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--color-accent);
    }

    .comparison-row .value {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--color-text);
      display: block;
      margin-top: 5px;
    }

    .manufacturer-section,
    .shoe-section {
      margin-top: 15px;
    }

    h2 {
      font-family: "PT Serif", serif;
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--color-text);
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    ul li {
      text-align: center;
      padding: 10px;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      background-color: var(--color-background-card);
      color: var(--color-link);
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    ul li:hover {
      background-color: var(--color-link);
      color: var(--color-button-text);
    }

    ul li a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }

    @media screen and (max-width: 768px) {
      .comparison-row {
        flex-direction: column;
        gap: 10px;
      }

      ul {
        grid-template-columns: 1fr;
      }
    }
  `;
}
