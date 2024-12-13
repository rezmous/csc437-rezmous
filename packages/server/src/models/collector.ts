export interface Collector {
  username: string;
  shoeCollection: Array<string>; 
  totalValue?: number;           
  quantity?: number;             
  manufacturers?: Array<string>; 
  shoeModels?: Array<{           
    sku: string;
    name: string;
  }>;
}
  