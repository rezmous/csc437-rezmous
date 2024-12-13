import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Collector, Shoe } from "server/models";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "collector/select":
      fetchCollector(message[1], user).then((collector) =>
        apply((model) => ({ ...model, collector }))
      );
      break;

    case "collector/save":
      saveCollector(message[1], user)
        .then(() => console.log("Collector saved successfully"))
        .catch((error: Error) =>
          console.error("Failed to save collector:", error)
        );
      break;

    case "shoe/select":
      selectShoe(message[1], user).then((shoe) =>
        apply((model) => ({ ...model, shoe }))
      );
      break;

    case "shoe/save":
      saveShoe(message[1], user)
        .then(() => console.log("Shoe saved successfully"))
        .catch((error: Error) => console.error("Failed to save shoe:", error));
      break;

    default:
      const unhandled: never = message[0];
      throw new Error(`Unhandled message "${unhandled}"`);
  }
}

function fetchCollector(msg: { username: string }, user: Auth.User) {
  console.log("Fetching collector data for:", msg.username);

  const headers = {
    ...Auth.headers(user),
    Authorization: `Bearer ${Auth.headers(user).Authorization?.replace(
      "Bearer ",
      ""
    )}`,
  };

  return fetch(`/api/collector/${msg.username}`, { headers })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching collector data: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log("Collector data received:", json);
      return json as Collector;
    })
    .catch((error) => {
      console.error("Failed to fetch collector data:", error);
      return undefined;
    });
}

function saveCollector(
  msg: { username: string; collector: Collector },
  user: Auth.User
) {
  return fetch(`/api/collector/${msg.username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(msg.collector),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to save collector: ${response.status}`);
    }
  });
}

function selectShoe(msg: { sku: string }, user: Auth.User) {
  return fetch(`/api/shoes/${msg.sku}`, {
    headers: Auth.headers(user),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch shoe: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => json as Shoe)
    .catch((error) => {
      console.error("Error fetching shoe data:", error);
      return undefined;
    });
}

function saveShoe(
  msg: { sku: string; shoe: Shoe },
  user: Auth.User
): Promise<void> {
  return fetch(`/api/shoes/${msg.sku}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(msg.shoe),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to save shoe: ${response.status}`);
    }
  });
}
