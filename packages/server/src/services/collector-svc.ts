import { Schema, model } from "mongoose";
import { Collector } from "../models/collector";
import { ShoeModel } from "./shoe-svc";
import { Shoe } from "../models/shoe";

const CollectorSchema = new Schema<Collector>(
  {
    username: { type: String, required: true, unique: true },
    shoeCollection: { type: [String], default: [] },
  },
  { collection: "shoecollector" }
);

export const CollectorModel = model<Collector>("Collector", CollectorSchema);

function get(username: string): Promise<{
  username: string;
  totalValue: number;
  quantity: number;
  favoriteBrand: string;
  shoeModels: Array<{ sku: string; name: string }>;
  manufacturers: string[];
}> {
  return CollectorModel.findOne({ username }).then(async (collector: { shoeCollection: string | any[]; username: any; }) => {
    if (!collector) throw new Error(`Collector ${username} not found.`);

    const shoes = await ShoeModel.find({
      sku: { $in: collector.shoeCollection },
    });

    const totalValue = shoes.reduce((sum: any, shoe: { price: { marketPrice: any; }; }) => {
      return sum + (shoe.price?.marketPrice || 0);
    }, 0);

    const brandCount = shoes.reduce((acc: Record<string, number>, shoe: { brand: string | number; }) => {
      acc[shoe.brand] = (acc[shoe.brand] || 0) + 1;
      return acc;
    }, {});

    const favoriteBrand =
      Object.entries(brandCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

    const shoeModels = shoes.map((shoe: { sku: string; name: string; }) => ({
      sku: shoe.sku,
      name: shoe.name,
    }));

    const manufacturers = Array.from(new Set(shoes.map((shoe: { brand: string; }) => shoe.brand)));

    return {
      username: collector.username,
      totalValue,
      quantity: collector.shoeCollection.length,
      favoriteBrand,
      shoeModels,
      manufacturers,
    };
  });
}

export default { get };
