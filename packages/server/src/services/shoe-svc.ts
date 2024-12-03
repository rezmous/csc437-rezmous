import { Schema, model } from "mongoose";
import { Shoe } from "../models/shoe";

const ShoeSchema = new Schema<Shoe>(
  {
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    colorway: String,
    releaseDate: Date,
    featuredImage: String,
    price: {
      originalPrice: Number,
      marketPrice: Number,
      currency: {
        amount: Number,
        symbol: String,
      },
    },
    inventory: {
      productionNumber: Number,
      pairsSold: Number,
      isLimitedEdition: Boolean,
      regions: [String],
    },
    categories: [String],
    designer: {
      name: String,
      collaborators: [String],
    },
  },
  { collection: "shoes" } 
);

export const ShoeModel = model<Shoe>("Shoe", ShoeSchema);

export function getBySKU(sku: string): Promise<Shoe | null> {
  console.log(`Querying for SKU: ${sku}`);
  return ShoeModel.findOne({ sku }).exec();
}

export function index(): Promise<Shoe[]> {
  return ShoeModel.find().exec();
}

export default { getBySKU, index };
