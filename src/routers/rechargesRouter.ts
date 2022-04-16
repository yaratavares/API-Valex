import { Router } from "express";
import * as rechargesController from "../controllers/rechargesController.js";

const rechargesRouter = Router();

rechargesRouter.post("/cards/:id/recharges", rechargesController.rechargeCard);

export default rechargesRouter;
