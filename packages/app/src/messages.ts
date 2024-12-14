import { Shoe } from "server/models";

export type Msg =
  | ["collector/select", { username: string }]
  | ["shoe/select", { sku: string }]
  | ["manufacturer/select", { name: string }]
  | ["designer/select", { name: string }]
  | [
      "shoe/add",
      {
        shoe: Partial<Shoe>;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | [
      "shoes/update",
      {
        shoe: Partial<Shoe>;
        sku: string;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ];