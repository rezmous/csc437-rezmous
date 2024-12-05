import express, { Request, Response } from "express";
import Collectors from "../services/collector-svc"; 
import { Collector } from "../models/collector"; 

const router = express.Router();

router.get("/:username", (req: Request, res: Response) => {
  const { username } = req.params;

  Collectors.get(username)
    .then((collector) => res.json(collector))
    .catch((err) => res.status(404).send({ error: err.message }));
});

router.post("/:username", (req: Request, res: Response) => {
  const { username } = req.params;
  const { sku } = req.body;

  if (!sku) {
    return res.status(400).send({ error: "SKU is required to add a shoe." });
  }

  Collectors.addShoe(username, sku)
    .then((updatedCollector: Collector) => res.status(201).json(updatedCollector))
    .catch((err) => res.status(500).send({ error: err.message }));
});

export default router;