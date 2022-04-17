import { Router } from "express";
import * as rechargesController from "../controllers/rechargesController.js";
import valideAPIKeyMiddleware from "../middlewares/valideAPIKeyMiddleware.js";

const rechargesRouter = Router();

rechargesRouter.post(
  "/cards/:id/recharges",
  valideAPIKeyMiddleware,
  rechargesController.rechargeCard
);

export default rechargesRouter;
