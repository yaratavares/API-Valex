import { Router } from "express";
import * as cardsController from "../controllers/cardsController.js";
import valideAPIKeyMiddleware from "../middlewares/valideAPIKeyMiddleware.js";
import validateSchemaMiddleware from "../middlewares/valideSchemaMiddleware.js";
import cardsSchema from "../schemas/cardsSchemas.js";

const cardsRouter = Router();

cardsRouter.post(
  "/cards",
  valideAPIKeyMiddleware,
  validateSchemaMiddleware(cardsSchema.newCard),
  cardsController.createNewCard
);
cardsRouter.patch(
  "/cards/:id/activate",
  validateSchemaMiddleware(cardsSchema.activateCard),
  cardsController.activateNewCard
);
cardsRouter.patch("/cards/:id/block", cardsController.blockCard);
cardsRouter.patch("/cards/:id/desblock", cardsController.desblockCard);
cardsRouter.get("/cards/:id/transactions", cardsController.getTransactions);

export default cardsRouter;
