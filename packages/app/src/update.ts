import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "collector/select":
      selectCollector(message[1], user).then((collector) =>
        apply((model) => ({ ...model, collector }))
      );
      break;

    case "shoe/select":
      selectShoe(message[1], user).then((shoe) =>
        apply((model) => ({ ...model, shoe }))
      );
      break;

    case "manufacturer/select":
      selectManufacturer(message[1], user).then((manufacturer) =>
        apply((model) => ({ ...model, manufacturer }))
      );
      break;

    case "designer/select":
      selectDesigner(message[1], user).then((designer) =>
        apply((model) => ({ ...model, designer }))
      );
      break;

    default:
      const unhandled: never = message[0];
      throw new Error(`Unhandled message: ${unhandled}`);
  }
}

function selectCollector({ username }: { username: string }, user: Auth.User) {
  return fetch(`/api/collector/${username}`, {
    headers: Auth.headers(user),
  })
    .then((response) => (response.ok ? response.json() : undefined))
    .then((json) => {
      console.log("Fetched collector:", json);
      return json;
    });
}

function selectShoe({ sku }: { sku: string }, user: Auth.User) {
  return fetch(`/api/shoes/${sku}`, {
    headers: Auth.headers(user),
  })
    .then((response) => (response.ok ? response.json() : undefined))
    .then((json) => {
      console.log("Fetched shoe:", json);
      return json;
    });
}

function selectManufacturer({ name }: { name: string }, user: Auth.User) {
  return fetch(`/api/manufacturer/${name}`, {
    headers: Auth.headers(user),
  })
    .then((response) => (response.ok ? response.json() : undefined))
    .then((json) => {
      console.log("Fetched manufacturer:", json);
      return json;
    });
}

function selectDesigner({ name }: { name: string }, user: Auth.User) {
  return fetch(`/api/designer/${name}`, {
    headers: Auth.headers(user),
  })
    .then((response) => (response.ok ? response.json() : undefined))
    .then((json) => {
      console.log("Fetched designer:", json);
      return json;
    });
}
