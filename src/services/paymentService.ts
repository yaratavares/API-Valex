import * as encryptService from "./microservice/encryptService.js";
import * as cardService from "./microservice/cardService.js";
import * as businessService from "./microservice/businessService.js";
import * as balanceAmount from "./microservice/balanceAmount.js";
import { insert } from "../repositories/paymentRepository.js";

export async function paymentNotVirtual(
  id: number,
  businessId: number,
  password: string,
  amount: number
) {
  const cardDetails = await cardService.verifyCardExist(id);

  cardService.verifyDateExpiration(cardDetails.expirationDate);

  await encryptService.verifyParameterCrypt(password, cardDetails.password);

  await businessService.verifyBusiness(businessId, cardDetails.type);

  await balanceAmount.calculateBalance(id, amount);

  await insert({ cardId: id, businessId, amount });
}
