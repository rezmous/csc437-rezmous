import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class HeaderElement extends HTMLElement {
  static template = html`
    <template>
      <header>
        <label class="dark-mode-switch">
          <svg class="icon-darkmode">
            <use href="/icons/logo.svg#icon-darkmode"></use>
          </svg>
          <input type="checkbox" id="darkModeToggle" autocomplete="off" />
        </label>
        <svg class="icon left-logo">
          <use href="/icons/logo.svg#icon-solelogo"></use>
        </svg>
        <h1><a href="#">Sole Collection</a></h1>
        <svg class="icon right-logo">
          <use href="/icons/logo.svg#icon-solelogo"></use>
        </svg>
        <nav>
          <a href="SneakerCollector/collector1.html">Your Collection</a>
        </nav>
      </header>
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          const isDarkMode = localStorage.getItem("darkMode") === "true";

          if (isDarkMode) {
            document.body.classList.add("dark-mode");
          }

          const headerElement = document.querySelector("header-element");
          if (headerElement) {
            const darkModeToggle =
              headerElement.shadowRoot.querySelector("#darkModeToggle");
            if (darkModeToggle) {
              darkModeToggle.checked = isDarkMode;
            }
          }
        });

        document.body.addEventListener("darkmode:toggle", (event) => {
          const isDarkMode = event.detail.isDarkMode;

          if (isDarkMode) {
            document.body.classList.add("dark-mode");
          } else {
            document.body.classList.remove("dark-mode");
          }

          localStorage.setItem("darkMode", isDarkMode);
        });
      </script>
    </template>
  `;

  static styles = css`
    header {
      background-color: var(--color-background-header);
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: sticky;
      top: 0;
    }

    header h1 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }

    header h1 a {
      text-decoration: none;
      color: var(--color-text-control);
    }

    header .icon {
      height: 2.5rem;
      width: 2.5rem;
      fill: var(--color-text-control);
    }

    .dark-mode-switch {
      display: flex;
      align-items: center;
      gap: 10px;
      position: absolute;
      left: 20px;
    }

    .icon-darkmode {
      height: 1.5rem;
      width: 1.5rem;
      fill: var(--color-text-control);
      cursor: pointer;
    }

    .left-logo {
      margin-right: 10px;
    }

    .right-logo {
      margin-left: 10px;
    }

    nav {
      display: flex;
      gap: 20px;
      position: absolute;
      right: 20px;
    }

    nav a {
      text-decoration: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: var(--color-text-control);
      background-color: var(--color-background-header);
      padding: 10px 20px;
      border-radius: 5px;
    }

    nav a:hover {
      background-color: var(--color-background-page);
    }
  `;

  constructor() {
    super();
    shadow(this)
      .template(HeaderElement.template)
      .styles(reset.styles, HeaderElement.styles);
  }

  connectedCallback() {
    const label = this.shadowRoot.querySelector(".dark-mode-switch");
    const toggle = this.shadowRoot.querySelector("#darkModeToggle");

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (toggle) {
      toggle.checked = isDarkMode;
    }

    if (label) {
      label.addEventListener("change", (event) => {
        event.stopPropagation();
        const isDarkMode = event.target.checked;
        this.dispatchEvent(
          new CustomEvent("darkmode:toggle", {
            bubbles: true,
            detail: { isDarkMode },
          })
        );
      });
    }
  }
}
