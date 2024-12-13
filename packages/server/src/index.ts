import express, { Request, Response } from "express";
import { ShoePage } from "./pages/shoe";
import Shoes from "./services/shoe-svc";
import Collector from "./services/collector-svc";
import { connect } from "./services/mongo";
import shoes from "./routes/shoes";
import auth, { authenticateUser } from "./routes/auth";
import { LoginPage } from "./pages/auth";
import { RegisterPage } from "./pages/registerAuth";
import collector from "./routes/collector";
import { CollectorPage } from "./pages/collector";

import fs from "node:fs/promises";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.use(express.json());
app.use("/auth", auth);
app.use("/api/shoes", shoes);
app.use("/api/collector", authenticateUser, collector);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
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

app.get("/collector/:username", (req: Request, res: Response) => {
  const { username } = req.params;

  Collector.get(username)
    .then((collector) => {
      if (!collector) {
        res.status(404).send(`Collector with username "${username}" not found`);
        return;
      }
      res
        .set("Content-Type", "text/html")
        .send(new CollectorPage(collector).render());
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
});

connect("sole_collection");
