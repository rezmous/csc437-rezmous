import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class HeaderElement extends HTMLElement {
  static template = html`
    <template>
      <header>
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
    </template>
  `;

  static styles = css`
    header {
      background-color: #007acc;
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
      color: #d4d4d4;
    }

    header .icon {
      height: 2.5rem;
      width: 2.5rem;
      fill: #d4d4d4;
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
      color: #d4d4d4;
      background-color: #007acc;
      padding: 10px 20px;
      border-radius: 5px;
    }

    nav a:hover {
      background-color: #005f9e;
    }
  `;

  constructor() {
    super();
    shadow(this)
      .template(HeaderElement.template)
      .styles(reset.styles, HeaderElement.styles);
  }
}
