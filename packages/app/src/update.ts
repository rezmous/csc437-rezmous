import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Shoe } from "server/models";

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

    case "shoe/add":
      console.log("Adding shoe with payload:", message[1].shoe);
      addShoe(message[1], user)
        .then(() => {
          console.log("Shoe added successfully.");
          const { onSuccess } = message[1];
          if (onSuccess) onSuccess();
        })
        .catch((error: Error) => {
          console.error("Error adding shoe:", error);
          const { onFailure } = message[1];
          if (onFailure) onFailure(error);
        });
      break;

    case "shoes/update":
      console.log("Processing shoe/update message:", message[1]);
      updateShoe(message[1], user)
        .then((updatedShoe) => {
          console.log("Shoe updated on server:", updatedShoe);
          apply((model) => ({
            ...model,
            shoe: updatedShoe, 
          }));
          const { onSuccess } = message[1];
          if (onSuccess) onSuccess();
        })
        .catch((error: Error) => {
          console.error("Error in shoe/update:", error);
          const { onFailure } = message[1];
          if (onFailure) onFailure(error);
        });
      break;

    default:
      const unhandled: never = message[0];
      throw new Error(`Unhandled message: ${unhandled}`);
  }
}

async function updateShoe(
  msg: { sku: string; shoe: Partial<Shoe> },
  user: Auth.User
): Promise<Shoe> {
  const response = await fetch(`/api/shoes/${msg.sku}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(msg.shoe),
  });
  if (!response.ok) {
    throw new Error(`Failed to update shoe: ${response.status}`);
  }
  return response.json();
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

function addShoe(msg: { shoe: Partial<Shoe> }, user: Auth.User) {
  return fetch(`/api/shoes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(msg.shoe),
  }).then((response) => {
    if (response.status !== 201) {
      throw new Error("Failed to add shoe");
    }
  });
}
