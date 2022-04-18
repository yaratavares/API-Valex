import * as paymentRepository from "../../repositories/paymentRepository.js";
import * as rechargesRepository from "../../repositories/rechargeRepository.js";
import * as errors from "../../utils/errorUtils.js";

export async function balanceAmount(id: number) {
  const transactions = await paymentRepository.findByCardId(id);

  let amountTransactions = 0;

  if (transactions.length > 0) {
    amountTransactions = transactions.reduce(
      (balance, currentValue) => balance + currentValue.amount,
      0
    );
  }

  const recharges = await rechargesRepository.findByCardId(id);

  let amountRecharges = 0;

  if (recharges.length > 0) {
    amountRecharges = recharges.reduce(
      (balance, currentValue) => balance + currentValue.amount,
      0
    );
  }

  const balance = amountRecharges - amountTransactions;

  return { balance, transactions, recharges };
}

export async function calculateBalance(id: number, amount: number) {
  const { balance } = await balanceAmount(id);

  if (balance < amount) {
    throw errors.unauthorizedError();
  }
}
