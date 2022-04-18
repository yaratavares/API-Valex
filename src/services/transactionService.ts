import { balanceAmount } from "./microservice/balanceAmount.js";
import * as cardService from "./microservice/cardService.js";

export default async function transactionService(id: number) {
  await cardService.verifyCardExist(id);

  const sendObject = await balanceAmount(id);

  return sendObject;
}
