import { BrandType, DesignerType, Shoe } from "../models/shoe";

const shoes = {
  yeezyBoost350: {
    sku: 67890,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas" as BrandType,
    colorway: "Zebra",
    releaseDate: new Date("2023-12-01"),
    featuredImage: "/images/shoes/yeezy-boost-350.jpg",
    price: {
      originalPrice: 220,
      marketPrice: 350,
      currency: {
        amount: 1,
        symbol: "$",
      },
    },
    inventory: {
      productionNumber: 10000,
      pairsSold: 8000,
      isLimitedEdition: true,
      regions: ["US", "EU", "CN"],
    },
    categories: ["Lifestyle", "Sneakers"],
    designer: {
      name: "Ye" as DesignerType,
      collaborators: ["Adidas"],
    },
  },
};

export function getShoe(_: string) {
  return shoes["yeezyBoost350"];
}
