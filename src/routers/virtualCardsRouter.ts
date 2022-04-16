import { Router } from "express";
import * as virtualCardsController from "../controllers/virtualCardsController.js";

const virtualCardsRouter = Router();

virtualCardsRouter.post(
  "/cards/:id/virtual",
  virtualCardsController.createNewCardVirtual
);
virtualCardsRouter.delete(
  "/cards/:id/virtual",
  virtualCardsController.deleteCardVirtual
);

export default virtualCardsRouter;
