import { Request, Response } from "express";

export async function createNewCardVirtual(req: Request, res: Response) {
  res.sendStatus(201);
}

export async function deleteCardVirtual(req: Request, res: Response) {
  res.sendStatus(200);
}
