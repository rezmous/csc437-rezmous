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

connect("sole_collection");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.use(express.json());

app.use("/auth", auth);
app.use("/api/shoes", shoes);
app.use("/api/collector", collector);

app.use((req, res, next) => {
  const indexPath = path.resolve(staticDir, "index.html");
  if (!req.path.startsWith("/api") && !req.path.startsWith("/auth")) {
    console.log(`Serving index.html for path: ${req.path}`);
    res.sendFile(indexPath);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
