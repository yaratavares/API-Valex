import { Router } from "express";
import * as paymentsController from "../controllers/paymentsController.js";

const paymentsRouter = Router();

paymentsRouter.post("cards/:id/payments", paymentsController.paymentNotVirtual);
paymentsRouter.post(
  "cards/virtual/payments",
  paymentsController.paymentVirtual
);

export default paymentsRouter;
