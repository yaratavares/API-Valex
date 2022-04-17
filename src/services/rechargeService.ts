import * as cardService from "../services/cardService.js";
import * as cardRepository from "../repositories/cardRepository.js";
import * as rechargesRepository from "../repositories/rechargeRepository.js";

export default async function rechargeService(id: number, amount: number) {
  const cardDetails: cardRepository.Card = await cardService.verifyCardExist(
    Number(id)
  );

  cardService.verifyDateExpiration(cardDetails.expirationDate);

  await rechargesRepository.insert({ cardId: id, amount });
}
