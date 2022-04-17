import dayjs from "dayjs";

import * as cardRepository from "../repositories/cardRepository.js";
import * as errors from "../utils/errorUtils.js";

export async function verifyCardExist(cardId: number) {
  const cardExist = await cardRepository.findById(cardId);

  if (!cardExist) {
    throw errors.notFoundError();
  }

  return cardExist;
}

export function verifyDateExpiration(expirationDate: string) {
  const date: dayjs.Dayjs = dayjs(new Date(), "DD/MM/YY");
  const expDate: dayjs.Dayjs = dayjs(`01/${expirationDate}`, "DD/MM/YY", true);

  const diffDates: number = expDate.diff(date, "month");

  if (diffDates < 0) {
    throw errors.unauthorizedError();
  }
}
