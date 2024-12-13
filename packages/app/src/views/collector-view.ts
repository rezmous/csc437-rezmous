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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "username" && oldValue !== newValue && newValue) {
      console.log(`Fetching collector data for: ${newValue}`);
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
      <section class="collector-page">
        <div class="collection-header">
          <h1>${username}'s Collection</h1>
          <p>Total Value: $${totalValue} | ${quantity} Pairs</p>
        </div>
        <section class="manufacturer-section">
          <h2>Manufacturers</h2>
          <ul>
            ${manufacturers.map(
              (manufacturer) =>
                html`<li>
                  <a href="/Manufacturer/${manufacturer.toLowerCase()}.html"
                    >${manufacturer}</a
                  >
                </li>`
            )}
          </ul>
        </section>
        <section class="shoe-section">
          <h2>Shoe Models</h2>
          <ul>
            ${shoeModels.map(
              (shoe) =>
                html`<li>
                  <a href="/shoes/${shoe.sku}">${shoe.name}</a>
                </li>`
            )}
          </ul>
        </section>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    .collector-page {
      padding: 20px;
      font-family: "Montserrat", sans-serif;
    }

    .collection-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .collection-header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-text);
    }

    .collection-header p {
      font-size: 1.2rem;
      color: var(--color-link);
    }

    .manufacturer-section,
    .shoe-section {
      margin-top: 20px;
    }

    h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 1.8rem;
      color: var(--color-text);
    }

    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }

    ul li {
      text-align: center;
      padding: 10px;
      border: 1px solid var(--color-link);
      border-radius: 8px;
      background-color: var(--color-background-card);
      color: var(--color-link);
      transition: background-color 0.3s ease, color 0.3s ease;
      cursor: pointer;
    }

    ul li:hover {
      background-color: var(--color-link);
      color: var(--color-button-text);
    }

    ul li a {
      text-decoration: none;
      color: inherit;
    }

    .loading {
      text-align: center;
      font-size: 1.5rem;
      color: var(--color-link);
      margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
      ul {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }

      ul li {
        padding: 8px;
      }
    }

    @media screen and (max-width: 480px) {
      ul {
        grid-template-columns: 1fr;
      }
    }
  `;
}
