import { findByApiKey } from "../repositories/companyRepository.js";
import { unauthorizedError } from "../utils/errorUtils.js";

export default async function valideAPIKeyService(key: string) {
  const existingCompany = await findByApiKey(key);

  if (!existingCompany) {
    throw unauthorizedError();
  }
}
