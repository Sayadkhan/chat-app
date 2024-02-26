import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";
import connetToMongoBD from "./db/connetToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello Eexpress");
});

app.listen(PORT, () => {
  connetToMongoBD();
  console.log(`App Run IN PORT ${PORT}`);
});
