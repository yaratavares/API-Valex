import express, { json } from "express";
import cors from "cors";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(5000, () => console.log("Port listen on 5000"));
