import { Request, Response } from "express";
import rechargeService from "../services/rechargeService.js";

export async function rechargeCard(req: Request, res: Response) {
  const { id } = req.params;
  const { amount } = req.query;

  if (Number(amount) <= 0) {
    return res.sendStatus(422);
  }

  await rechargeService(Number(id), Number(amount));

  res.sendStatus(201);
}
