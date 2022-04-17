import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

import * as employeeRepository from "../repositories/employeeRepository.js";
import * as cardRepository from "../repositories/cardRepository.js";
import * as errors from "../utils/errorUtils.js";

export default async function createCardService(
  employeeId: number,
  type: cardRepository.TransactionTypes
) {
  const employee = await verifyEmployeeExist(employeeId);

  await verifyCardTypeAlreadyExist(employeeId, type);

  const { cardholderName, number, securityCode, expirationDate } =
    getDetailsCard(employee.fullName);

  await cardRepository.insert({
    employeeId,
    number,
    cardholderName,
    securityCode,
    expirationDate,
    password: null,
    isVirtual: false,
    originalCardId: null,
    isBlocked: true,
    type,
  });
}

function formatNameCard(name: string) {
  const nameArray: string[] = name.split(" ");
  let nameString: string = nameArray[0] + " ";

  for (let i = 1; i < nameArray.length; i++) {
    if (i === nameArray.length - 1) {
      nameString += nameArray[i];
      break;
    }
    if (nameArray[i].length > 3) {
      nameString += nameArray[i][0] + " ";
    }
  }

  return nameString.toUpperCase();
}

async function verifyEmployeeExist(employeeId: number) {
  const employeeExist = await employeeRepository.findById(employeeId);

  if (!employeeExist) {
    throw errors.notFoundError();
  }

  return employeeExist;
}

async function verifyCardTypeAlreadyExist(
  employeeId: number,
  type: cardRepository.TransactionTypes
) {
  const employeeWithTypeCardExist =
    await cardRepository.findByTypeAndEmployeeId(type, employeeId);

  if (employeeWithTypeCardExist) {
    throw errors.conflictError();
  }
}

function getDetailsCard(name: string) {
  const cardholderName = formatNameCard(name);
  const number = faker.finance.creditCardNumber("mastercard");
  const securityCode = bcrypt.hashSync(faker.finance.creditCardCVV(), 10);
  const expirationDate = dayjs().add(5, "year").format("MM/YY").toString();

  return { cardholderName, number, securityCode, expirationDate };
}
