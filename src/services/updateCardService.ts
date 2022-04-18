import bcrypt from "bcrypt";

import * as cardRepository from "../repositories/cardRepository.js";
import * as cardService from "../services/microservice/cardService.js";
import * as errors from "../utils/errorUtils.js";

export async function activateNewCard(
  cardId: number,
  securityCode: string,
  password: string
) {
  const cardDetails: cardRepository.Card = await cardService.verifyCardExist(
    cardId
  );

  cardService.verifyDateExpiration(cardDetails.expirationDate);

  if (!bcrypt.compareSync(securityCode, cardDetails.securityCode)) {
    throw errors.unauthorizedError();
  }

  if (cardDetails.password) {
    throw errors.conflictError();
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await cardRepository.update(cardId, { password: passwordHash });
}
