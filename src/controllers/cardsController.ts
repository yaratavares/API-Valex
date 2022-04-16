import { Request, Response } from "express";

export async function createNewCard(req: Request, res: Response) {
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
