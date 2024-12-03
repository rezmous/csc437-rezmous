import express, { Request, Response } from "express";
import { ShoePage } from "./pages/shoe";
import Shoes from "./services/shoe-svc";
import { connect } from "./services/mongo";
import shoes from "./routes/shoes";


const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.use(express.json());
app.use("/api/shoes", shoes);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/shoes/:sku", (req: Request, res: Response) => {
  const { sku } = req.params;

  Shoes.get(sku)
    .then((shoe) => {
      if (!shoe) {
        res.status(404).send(`Shoe with SKU "${sku}" not found`);
        return;
      }
      res.set("Content-Type", "text/html").send(new ShoePage(shoe).render());
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
});

connect("sole_collection");
