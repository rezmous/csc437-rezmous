import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";
import headings from "./styles/headings.css.js";

export class RegisterForm extends HTMLElement {
  static template = html`<template>
    <form onsubmit="false;">
      <slot name="title">
        <h3>Register with Username and Password</h3>
      </slot>
      <label>
        <span>
          <slot name="username">Username</slot>
        </span>
        <input name="username" autocomplete="off" />
      </label>
      <label>
        <span>
          <slot name="password">Password</slot>
        </span>
        <input type="password" name="password" />
      </label>
      <label>
        <span>
          <slot name="confirm-password">Confirm Password</slot>
        </span>
        <input type="password" name="confirmPassword" />
      </label>
      <slot name="submit">
        <button type="submit">Register</button>
      </slot>
    </form>
  </template>`;

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: var(--color-background-card);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: 2rem auto;
      font-family: "Montserrat", sans-serif;
    }

    h3 {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--color-link);
      text-align: center;
      margin-bottom: 1rem;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text);
    }

    input {
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid var(--color-accent);
      border-radius: 4px;
      background-color: var(--color-background-page);
      color: var(--color-text);
    }

    input:focus {
      outline: none;
      border-color: var(--color-link);
      box-shadow: 0 0 4px var(--color-link);
    }

    button {
      padding: 0.75rem;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      background-color: var(--color-button-primary);
      color: var(--color-text-inverted);
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    button:hover {
      background-color: var(--color-button-hover);
    }

    button:active {
      background-color: var(--color-button-active);
    }

    body.dark-mode button {
      background-color: var(--color-button-primary-dark);
      color: var(--color-text-control);
    }

    body.dark-mode button:hover {
      background-color: var(--color-button-hover-dark);
    }

    body.dark-mode button:active {
      background-color: var(--color-button-active-dark);
    }

    @media (max-width: 768px) {
      form {
        padding: 1.5rem;
      }

      h3 {
        font-size: 1.2rem;
      }

      button {
        font-size: 0.9rem;
      }
    }
  `;

  constructor() {
    super();

    shadow(this)
      .template(RegisterForm.template)
      .styles(reset.styles, headings.styles, RegisterForm.styles);

    this._errorElement = this.shadowRoot.querySelector(".error-message");
    this.form.addEventListener("submit", (event) => this._submitForm(event));
  }

  get form() {
    return this.shadowRoot.querySelector("form");
  }

  _showError(message) {
    this._errorElement.textContent = message;
    this._errorElement.style.display = "block";
  }

  _clearError() {
    this._errorElement.textContent = "";
    this._errorElement.style.display = "none";
  }

  _submitForm(event) {
    event.preventDefault();

    const form = event.target.closest("form");
    const data = new FormData(form);
    const method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(Object.fromEntries(data));
    const endpoint = this.getAttribute("api");
    const redirect = this.getAttribute("redirect") || "/";

    console.log("POST new user request:", body);

    fetch(endpoint, { method, headers, body })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else if (res.status === 400) {
          throw new Error("Invalid input. Please check your details.");
        } else if (res.status === 409) {
          throw new Error("Username already exists.");
        } else {
          throw new Error(`Unexpected error: Status ${res.status}`);
        }
      })
      .then((payload) => {
        const { token } = payload;

        form.dispatchEvent(
          new CustomEvent("auth:message", {
            bubbles: true,
            composed: true,
            detail: ["auth/signin", { token, redirect }],
          })
        );
      })
      .catch((err) => {
        console.error("Error submitting registration form:", err);
        this._showError(err.message);
      });
  }
}
