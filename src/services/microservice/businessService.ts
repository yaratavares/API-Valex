import * as businessRepository from "../../repositories/businessRepository.js";
import * as errors from "../../utils/errorUtils.js";

export async function verifyBusiness(id: number, type: string) {
  const business = await businessRepository.findById(id);

  if (!business) {
    throw errors.unauthorizedError();
  }

  if (business.type !== type) {
    throw errors.unauthorizedError();
  }

  return business;
}
