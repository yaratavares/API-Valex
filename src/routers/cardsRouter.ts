import { Router } from "express";
import * as cardsController from "../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", cardsController.createNewCard);
cardsRouter.patch("/cards/:id/activate", cardsController.activateNewCard);
cardsRouter.patch("/cards/:id/block", cardsController.blockCard);
cardsRouter.patch("/cards/:id/desblock", cardsController.desblockCard);
cardsRouter.get("/cards/:id/transactions", cardsController.getTransactions);

export default cardsRouter;
