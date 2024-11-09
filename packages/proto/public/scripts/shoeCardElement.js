import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class ShoeCardElement extends HTMLElement {
  static template = html`
    <template>
      <article class="shoe-card">
        <header>
          <h2><slot name="name">Shoe Model</slot></h2>
        </header>
        <section class="shoe-info">
          <dl>
            <dt>Retail Value</dt>
            <dd><slot name="retail-value">$0</slot></dd>
            <dt>Scarcity</dt>
            <dd><slot name="scarcity">Common</slot></dd>
          </dl>
        </section>
        <section class="designer-info">
          <h3>Designed by</h3>
          <ul>
            <li><slot name="designer">Designer Name</slot></li>
          </ul>
        </section>
      </article>
    </template>
  `;

  static styles = css``;

  constructor() {
    super();
    shadow(this)
      .template(ShoeCardElement.template)
      .styles(reset.styles, ShoeCardElement.styles);
  }
}
