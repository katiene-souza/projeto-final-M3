
import express from "express";
import { connectionToDatabase } from "./database/config";
import { config } from "dotenv";
config();

connectionToDatabase();

const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log("app running on port: http://localhost:3000");
});