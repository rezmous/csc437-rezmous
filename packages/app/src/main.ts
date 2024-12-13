import { Auth, History, Switch, define } from "@calpoly/mustang";
import { html, LitElement } from "lit";
import { SoleCollectionHeaderElement } from "./components/solecollection-header";
import { HomeViewElement } from "./views/home-view";

class AppElement extends LitElement {
  static uses = define({
    "home-view": HomeViewElement,
  });

  protected render() {
    return html` <home-view></home-view> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }
}

const routes = [
  {
    path: "/shoes/:sku",
    view: (params: Switch.Params) => html`
      <shoe-view sku=${params.sku}></shoe-view>
    `,
  },
  {
    path: "/collector/:username",
    view: (params: Switch.Params) => html`
      <collector-view username=${params.username}></collector-view>
    `,
  },
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    view: () => html` <home-view></home-view> `,
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "sole_collection:history", "sole_collection:auth");
    }
  },
  "solecollection-app": AppElement,
  "solecollection-header": SoleCollectionHeaderElement,
});
