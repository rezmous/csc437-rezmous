import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class ManufacturerViewElement extends LitElement {
  @property()
  manufacturerName?: string;

  @property({ state: true })
  manufacturerData?: {
    name: string;
    logoUrl: string;
    description: string;
    designers: { name: string; link: string }[];
  };

  static manufacturers = {
    nike: {
      name: "Nike",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      description:
        "Nike, Inc. is an American multinational corporation engaged in the design, development, manufacturing, and marketing of footwear, apparel, equipment, and accessories. Known for its iconic swoosh logo and tagline 'Just Do It.'",
      designers: [
        { name: "Tinker Hatfield", link: "/Designer/tinker.html" },
        { name: "Travis Scott", link: "/Designer/travis.html" },
        { name: "Virgil Abloh", link: "/Designer/abloh.html" },
      ],
    },
    jordan: {
      name: "Jordan Brand",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",
      description:
        "Jordan Brand, a subsidiary of Nike, is an American sportswear brand inspired by NBA Hall of Famer Michael Jordan. It is known for its signature Air Jordan sneakers and its influence on basketball culture and fashion.",
      designers: [
        { name: "Tinker Hatfield", link: "/Designer/tinker.html" },
        { name: "Travis Scott", link: "/Designer/travis.html" },
        { name: "Virgil Abloh", link: "/Designer/abloh.html" },
      ],
    },
    adidas: {
      name: "Adidas",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      description:
        "Adidas is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. Known for its iconic three stripes, Adidas is a leader in the global sportswear industry, creating innovative designs and partnering with world-renowned designers and athletes.",
      designers: [
        { name: "Daniel Arsham", link: "/Designer/arsham.html" },
        { name: "Jerry Lorenzo", link: "/Designer/lorenzo.html" },
        { name: "Ye", link: "/Designer/ye.html" },
      ],
    },
  };

  connectedCallback() {
    super.connectedCallback();
    this.updateManufacturerData();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "manufacturerName" && oldValue !== newValue && newValue) {
      this.updateManufacturerData();
    }
  }

  updateManufacturerData() {
    if (this.manufacturerName) {
      this.manufacturerData =
        ManufacturerViewElement.manufacturers[
          this
            .manufacturerName as keyof typeof ManufacturerViewElement.manufacturers
        ];
    } else {
      this.manufacturerData = undefined;
    }
  }

  render() {
    if (!this.manufacturerData) {
      return html`<p class="loading">
        No manufacturer selected or data not available.
      </p>`;
    }

    const { name, logoUrl, description, designers } = this.manufacturerData;

    return html`
      <div class="manufacturer-card">
        <div class="manufacturer-header">
          <h1>${name}</h1>
          <img class="manufacturer-logo" src="${logoUrl}" alt="${name} Logo" />

          <p class="description">${description}</p>
        </div>
        <section class="designer-section">
          <h2>Designers</h2>
          <ul>
            ${designers.map(
              (designer) =>
                html`<li>
                  <a href="${designer.link}">
                    <span>${designer.name}</span>
                  </a>
                </li>`
            )}
          </ul>
        </section>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-color: var(--color-background-page);
      padding-top: 40px;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      overflow: hidden;
    }

    .manufacturer-card {
      max-width: 800px;
      width: 90%;
      padding: 20px;
      border: 1px solid var(--color-accent);
      border-radius: 10px;
      background-color: var(--color-background-card);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      box-sizing: border-box;
      overflow: hidden;
    }

    .manufacturer-header {
      margin-bottom: 20px;
    }

    .manufacturer-header img {
      max-width: 150px;
      margin: 0 auto 15px;
      display: block;
    }

    .manufacturer-header h1 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 2rem;
      margin: 10px 0;
      color: var(--color-text);
    }

    .manufacturer-header p {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: var(--color-link);
      margin-bottom: 20px;
    }

    .designer-section {
      margin-top: 20px;
    }

    .designer-section h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--color-link);
    }

    .designer-section ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    .designer-section ul li {
      display: inline-block;
      background-color: var(--color-background-page);
      border: 1px solid var(--color-accent);
      border-radius: 5px;
      padding: 10px 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-link);
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .designer-section ul li:hover {
      background-color: var(--color-link);
      color: var(--color-background-page);
    }

    .designer-section ul li a {
      color: inherit;
      text-decoration: none;
    }

    figure {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }

    figure img {
      max-width: 200px;
      height: auto;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      .manufacturer-card {
        width: 80%;
      }
    }

    @media (max-width: 480px) {
      .manufacturer-card {
        width: 90%;
      }
    }
  `;
}
