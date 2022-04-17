import bcrypt from "bcrypt";
import dayjs from "dayjs";

import * as cardRepository from "../repositories/cardRepository.js";
import * as errors from "../utils/errorUtils.js";

export async function activateNewCard(
  cardId: number,
  securityCode: string,
  password: string
) {
  const cardDetails: cardRepository.Card = await verifyCardExist(cardId);

  verifyDateExpiration(cardDetails.expirationDate);

  if (!bcrypt.compareSync(securityCode, cardDetails.securityCode)) {
    throw errors.unauthorizedError();
  }

  if (cardDetails.password) {
    throw errors.conflictError();
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await cardRepository.update(cardId, { password: passwordHash });
}

async function verifyCardExist(cardId: number) {
  const cardExist = await cardRepository.findById(cardId);

  if (!cardExist) {
    throw errors.notFoundError();
  }

  return cardExist;
}

function verifyDateExpiration(expirationDate: string) {
  const date: dayjs.Dayjs = dayjs(new Date(), "DD/MM/YY");
  const expDate: dayjs.Dayjs = dayjs(`01/${expirationDate}`, "DD/MM/YY", true);

  const diffDates: number = expDate.diff(date, "month");

  if (diffDates < 0) {
    throw errors.unauthorizedError();
  }
}
