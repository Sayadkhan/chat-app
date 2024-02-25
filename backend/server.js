import express from "express";

import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Eexpress");
});

app.use("/api/auth", authRoute);

app.listen(PORT, console.log(`App Run IN PORT ${PORT}`));
