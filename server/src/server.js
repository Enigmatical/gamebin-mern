import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import gameRoutes from "./models/Game/routes";

const PORT = process.env.PORT || 5000;
const dbURL = process.env.DB_CONNECTION_STRING || "mongodb://db:27017/<db>";

/**
 * Setup Server
 */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Setup DB
 */
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Model Routes
 */
app.use("/games", gameRoutes);

app.get("/", (req, res) => {
  res.send("OK");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
