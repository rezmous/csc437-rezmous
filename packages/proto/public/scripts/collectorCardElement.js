import { css, html, shadow, Observer } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class CollectorCardElement extends HTMLElement {
  static template = html`
    <template>
      <article class="collector-card">
        <main>
          <section class="card">
            <h2>
              <slot name="username">Sneaker Collector</slot>'s Current
              Collection
            </h2>
            <div class="collection-stats">
              <div class="stat">
                <p class="value">
                  <slot name="total-value">$0</slot>
                </p>
                <p class="label">Value of Collection</p>
              </div>
              <div class="stat">
                <p class="value">
                  <slot name="quantity">0 Pairs</slot>
                </p>
                <p class="label">Quantity</p>
              </div>
            </div>
          </section>
          <section class="card combined-card">
            <div class="collection-info">
              <h3>Manufacturers</h3>
              <ul>
                <slot name="manufacturers">
                  <a href="#">No Manufacturers</a>
                </slot>
              </ul>
            </div>
            <div class="collection-info">
              <h3>Shoe Models</h3>
              <ul>
                <slot name="shoe-models">
                  <a href="#">No Shoe Models</a>
                </slot>
              </ul>
            </div>
          </section>
        </main>
      </article>
    </template>
  `;

  static styles = css`
    .collection-stats {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 30px;
      padding: 0 40px;
    }

    .stat {
      text-align: center;
    }

    .stat .value {
      font-size: 3rem;
      font-weight: bold;
      color: var(--color-link);
      margin: 0;
    }

    .stat .label {
      font-size: 1.2rem;
      color: var(--color-text);
      margin-top: 15px;
    }

    .card {
      max-width: 900px;
      padding: 30px;
      margin: 30px auto;
      border: 2px solid var(--color-accent);
      border-radius: 15px;
      background-color: var(--color-background-card);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    .card h2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 15px;
      color: var(--color-text);
    }

    .combined-card {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      padding: 30px;
      gap: 50px;
    }

    .collection-info {
      flex: 1;
    }

    .collection-info h3 {
      font-size: 1.8rem;
      color: var(--color-link);
      margin-bottom: 15px;
    }

    @media (max-width: 768px) {
      .collection-stats {
        flex-direction: column;
      }

      .combined-card {
        flex-direction: column;
      }

      .stat {
        margin-bottom: 20px;
      }

      .card {
        width: 90%;
      }
    }

    @media (max-width: 480px) {
      .card {
        width: 95%;
      }

      .stat .value {
        font-size: 2.5rem;
      }

      .stat .label {
        font-size: 1rem;
      }
    }
  `;

  constructor() {
    super();
    shadow(this)
      .template(CollectorCardElement.template)
      .styles(reset.styles, CollectorCardElement.styles);
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
    console.log("Data received in renderSlots:", data);

    const usernameSlot = this.shadowRoot.querySelector("[slot='username']");
    if (usernameSlot) usernameSlot.textContent = data.username;

    const totalValueSlot = this.shadowRoot.querySelector(
      "[slot='total-value']"
    );
    if (totalValueSlot) totalValueSlot.textContent = `$${data.totalValue}`;

    const quantitySlot = this.shadowRoot.querySelector("[slot='quantity']");
    if (quantitySlot) quantitySlot.textContent = `${data.quantity} Pairs`;

    const manufacturersSlot = this.shadowRoot.querySelector(
      "[slot='manufacturers']"
    );
    if (manufacturersSlot) manufacturersSlot.innerHTML = "";

    const shoeModelsSlot = this.shadowRoot.querySelector(
      "[slot='shoe-models']"
    );
    if (shoeModelsSlot) shoeModelsSlot.innerHTML = "";
  }
}
