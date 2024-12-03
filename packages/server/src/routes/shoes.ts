import express, { Request, Response } from "express";
import Shoes from "../services/shoe-svc"; 
import { Shoe } from "../models/shoe"; 

const router = express.Router();

router.get("/", (_, res: Response) => {
  Shoes.index()
    .then((list: Shoe[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:sku", (req: Request, res: Response) => {
  console.log("Request for SKU:", req.params.sku);
  const { sku } = req.params;

  Shoes.get(sku)
    .then((shoe: Shoe) => res.json(shoe))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newShoe = req.body;

  Shoes.create(newShoe)
    .then((shoe: Shoe) => res.status(201).json(shoe))
    .catch((err) => res.status(500).send(err));
});

router.put("/:sku", (req: Request, res: Response) => {
  const { sku } = req.params;
  const updatedShoe = req.body;

  Shoes.update(sku, updatedShoe)
    .then((shoe: Shoe) => res.json(shoe))
    .catch((err) => res.status(404).send(err));
});

router.delete("/:sku", (req: Request, res: Response) => {
  const { sku } = req.params;

  Shoes.remove(sku)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
