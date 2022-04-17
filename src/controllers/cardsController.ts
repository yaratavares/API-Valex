import { Request, Response } from "express";
import createCardService from "../services/createCardSevice.js";

export async function createNewCard(req: Request, res: Response) {
  const { employeeId, type } = req.body;

  await createCardService(employeeId, type);

  res.sendStatus(201);
}

export async function activateNewCard(req: Request, res: Response) {
  res.sendStatus(200);
}

export async function getTransactions(req: Request, res: Response) {
  res.sendStatus(200);
}

export async function blockCard(req: Request, res: Response) {
  res.sendStatus(200);
}

export async function desblockCard(req: Request, res: Response) {
  res.sendStatus(200);
}
