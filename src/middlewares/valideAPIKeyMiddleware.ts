import { NextFunction, Request, Response } from "express";
import valideAPIKeyService from "../services/valideAPIKeyService.js";

export default async function valideAPIKeyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { ["x-api-key"]: key } = req.headers;

  if (!key) {
    return res.sendStatus(401);
  }

  await valideAPIKeyService(String(key));

  next();
}
