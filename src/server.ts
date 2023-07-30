
import express from "express";
import { connectionToDatabase } from "./database/config";
import { config } from "dotenv";
import { router } from "./routes/routes";
import path from "path";
config();

connectionToDatabase();

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "uploads")));

app.use(express.json());
app.use(router);



const port = process.env.PORT;
app.listen(port, () => {
    console.log("app running on port: http://localhost:3000");
});