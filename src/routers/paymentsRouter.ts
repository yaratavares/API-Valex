import { Router } from "express";
import * as paymentsController from "../controllers/paymentsController.js";
import validateSchemaMiddleware from "../middlewares/valideSchemaMiddleware.js";
import paymentsSchemas from "../schemas/paymentsSchemas.js";

const paymentsRouter = Router();

paymentsRouter.post(
  "/cards/virtual/payments",
  paymentsController.paymentVirtual
);
paymentsRouter.post(
  "/cards/:id/payments",
  validateSchemaMiddleware(paymentsSchemas.buyPointsOfSale),
  paymentsController.paymentNotVirtual
);

export default paymentsRouter;
