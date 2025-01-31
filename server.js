import * as Sentry from "@sentry/node";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import "./config/instrument.js";
import { clerkWebhook } from "./controllers/webhooks.js";
//Init
const app = express();

//connect to database
await connectDB();
//Middlewares
app.use(cors());
app.use(express.json());
//Routes
app.get("/", (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhook", clerkWebhook);
//Port
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
