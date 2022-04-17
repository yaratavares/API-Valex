import { NextFunction, Request, Response } from "express";
import { errorUtils } from "../utils/errorUtils.js";

export default function errorHandleMiddleware(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.type) {
    return res.sendStatus(errorUtils[err.type]);
  }

  console.log(err);
  res.sendStatus(500);
}
