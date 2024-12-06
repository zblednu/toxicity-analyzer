import analyse from "./toxicity.js";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ error: "Request's body must be a valid JSON containing \"message\" field" });
  }

  const analysis = await analyse(req.body.message);
  res.status(200).json(analysis);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Live at http://localhost:8080"));
