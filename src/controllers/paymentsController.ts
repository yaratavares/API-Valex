import { Request, Response } from "express";

export async function paymentNotVirtual(req: Request, res: Response) {
  const { id } = req.params;

  res.sendStatus(201);
}

export async function paymentVirtual(req: Request, res: Response) {
  res.sendStatus(201);
}
