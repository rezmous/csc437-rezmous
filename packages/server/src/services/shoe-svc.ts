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

function index(): Promise<Shoe[]> {
  return ShoeModel.find();
}

function get(sku: string): Promise<Shoe> {
  return ShoeModel.findOne({ sku })
    .then((shoe: any) => {
      if (!shoe) throw `Shoe with SKU ${sku} Not Found`;
      return shoe;
    });
}

function create(shoe: Shoe): Promise<Shoe> {
  const newShoe = new ShoeModel(shoe);
  return newShoe.save();
}

function update(sku: string, shoe: Shoe): Promise<Shoe> {
  return ShoeModel.findOneAndUpdate({ sku }, shoe, { new: true }).then(
    (updatedShoe: any) => {
      if (!updatedShoe) throw `Shoe with SKU ${sku} Not Found`;
      return updatedShoe;
    }
  );
}

function remove(sku: string): Promise<void> {
  return ShoeModel.findOneAndDelete({ sku }).then((deletedShoe: any) => {
    if (!deletedShoe) throw `Shoe with SKU ${sku} Not Found`;
  });
}

export default { index, get, create, update, remove };
