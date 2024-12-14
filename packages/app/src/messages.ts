export type Msg =
  | ["collector/select", { username: string }]
  | ["shoe/select", { sku: string }]
  | ["manufacturer/select", { name: string }]
  | ["designer/select", { name: string }];