import { Request, Response } from "express";

import * as paymentService from "../services/paymentService.js";

export async function paymentNotVirtual(req: Request, res: Response) {
  const { id } = req.params;
  const { password, businessId, amount } = req.body;

  if (Number(amount) <= 0) {
    return res.sendStatus(422);
  }

  await paymentService.paymentNotVirtual(
    Number(id),
    businessId,
    password,
    Number(amount)
  );

  res.sendStatus(201);
}

export async function paymentVirtual(req: Request, res: Response) {
  console.log("virtual");
  res.sendStatus(201);
}
