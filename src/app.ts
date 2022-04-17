import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import errorHandleMiddleware from "./middlewares/errorHandleMiddleware.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandleMiddleware);

app.listen(5000, () => console.log("Port listen on 5000"));
