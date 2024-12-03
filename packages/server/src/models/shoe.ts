export interface Shoe {
  sku: string;
  name: string;
  brand: BrandType;
  colorway: string;
  releaseDate: Date;
  featuredImage?: string;
  price: Price;
  inventory: Inventory;
  categories?: Array<string>;
  designer?: Designer;
}

export interface Price {
  originalPrice: number;
  marketPrice?: number;
  currency: Currency;
}

export interface Inventory {
  productionNumber: number;
  pairsSold: number;
  isLimitedEdition?: boolean;
  regions?: Array<string>;
}

export interface Designer {
  name: DesignerType;
  collaborators?: Array<string>;
}

export interface Currency {
  amount: number;
  symbol: string;
}

export type BrandType = "Nike" | "Adidas" | "Jordan";

export type DesignerType =
  | "Tinker Hatfield"
  | "Ye"
  | "Virgil Abloh"
  | "Travis Scott"
  | "Daniel Arsham"
  | "Jerry Lorenzo";
