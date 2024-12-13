import { Auth, History, Switch, Store, define } from "@calpoly/mustang";
import { html, LitElement } from "lit";
import { SoleCollectionHeaderElement } from "./components/solecollection-header";
import { HomeViewElement } from "./views/home-view";
import { CollectorViewElement } from "./views/collector-view";
import update from "./update";
import { Model, init } from "./model";
import { Msg } from "./messages";
import { ShoeViewElement } from "./views/shoe-view";
import { ManufacturerViewElement } from "./views/manufacturer-view";
import { DesignerViewElement } from "./views/designer-view";

class AppElement extends LitElement {
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
    path: "/manufacturer/:name",
    view: (params: Switch.Params) => html`
      <manufacturer-view manufacturerName=${params.name}></manufacturer-view>
    `,
  },
  {
    path: "/designer/:name",
    view: (params: Switch.Params) => html`
      <designer-view designerName=${params.name}></designer-view>
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
  "mu-store": class AppStore extends Store.Provider<Model, Msg> {
    constructor() {
      super(update, init, "sole_collection:auth");
    }
  },
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "sole_collection:history", "sole_collection:auth");
    }
  },
  "solecollection-app": AppElement,
  "solecollection-header": SoleCollectionHeaderElement,
  "home-view": HomeViewElement,
  "collector-view": CollectorViewElement,
  "designer-view": DesignerViewElement,
  "manufacturer-view": ManufacturerViewElement,
  "shoe-view": ShoeViewElement,
});
