import { LitElement, css, html } from "lit";
import { Events } from "@calpoly/mustang";

export class SoleCollectionHeaderElement extends LitElement {
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
      margin-right: 10px;
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

  connectedCallback() {
    super.connectedCallback();
    this.applyDarkMode();
  }

  render() {
    return html`
      <header>
        <label class="dark-mode-switch">
          <svg class="icon-darkmode">
            <use href="./assets/logo.svg#icon-darkmode"></use>
          </svg>
          <input
            type="checkbox"
            id="darkModeToggle"
            autocomplete="off"
            @change=${this.handleDarkModeToggle}
            .checked=${this.isDarkModeEnabled()}
          />
        </label>
        <svg class="icon left-logo">
          <use href="./assets/logo.svg#icon-solelogo"></use>
        </svg>
        <h1><a href="/">Sole Collection</a></h1>
        <svg class="icon right-logo">
          <use href="./assets/logo.svg#icon-solelogo"></use>
        </svg>
        <nav>
          ${this.renderCollectionLink()}
          <a id="auth-link" href="#" @click=${this.handleAuth}>
            ${this.getAuthText()}
          </a>
        </nav>
      </header>
    `;
  }

  renderCollectionLink() {
    const userId = this.getUserId();
    if (!userId) {
      return html``;
    }
    return html`
      <a id="collection-link" href="/collector/${userId}">
        <span id="userid">${userId}</span>'s Collection
      </a>
    `;
  }

  handleDarkModeToggle(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const isDarkMode = target.checked;

    Events.relay(ev, "darkmode:toggle", { isDarkMode });
    this.updateDarkMode(isDarkMode);
  }

  updateDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", String(isDarkMode));
  }

  applyDarkMode() {
    const isDarkMode = this.isDarkModeEnabled();
    this.updateDarkMode(isDarkMode);
  }

  isDarkModeEnabled() {
    return localStorage.getItem("darkMode") === "true";
  }

  handleAuth(ev: Event) {
    ev.preventDefault();
  
    const userId = this.getUserId();
  
    if (!userId) {
      window.location.href = "/login.html";
    } else {
      localStorage.removeItem("userid");
      localStorage.removeItem("auth-token");
  
      Events.relay(ev, "auth:signout");
  
      window.location.href = "/login.html";
    }
  }

  getUserId() {
    return localStorage.getItem("userid") || "";
  }

  getAuthText() {
    return this.getUserId() ? "Sign Out" : "Sign In";
  }
}
