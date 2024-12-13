import { Collector, Shoe } from "server/models";

export type Msg =
  | ["collector/select", { username: string }] 
  | ["collector/save", { username: string; collector: Collector }] 
  | ["shoe/select", { sku: string }] 
  | ["shoe/save", { sku: string; shoe: Shoe }]; 