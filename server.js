import cors from "cors";
import "dotenv/config";
import express from "express";
//Init
const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
//Routes
app.get("/", (req, res) => res.send("API Working"));
//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
