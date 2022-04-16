import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.get("/teste", () => console.log("ok"));

app.listen(5000, () => console.log("Port listen on 5000"));
