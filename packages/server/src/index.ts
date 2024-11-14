import express, { Request, Response } from "express";
import { ShoePage } from "./pages/shoe"; 
import { getShoe } from "./services/shoe-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/shoes/:shoeId", (req: Request, res: Response) => {
  const { shoeId } = req.params;
  const data = getShoe(shoeId);
  const page = new ShoePage(data);

  res.set("Content-Type", "text/html").send(page.render());
});
