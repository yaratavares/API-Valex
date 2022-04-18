import bcrypt from "bcrypt";
import * as errors from "../../utils/errorUtils.js";

export async function verifyParameterCrypt(
  parameter: string,
  encryptParameter: string | null
) {
  if (!encryptParameter) {
    throw errors.conflictError();
  }

  if (!bcrypt.compareSync(parameter, encryptParameter)) {
    throw errors.unauthorizedError();
  }
}
