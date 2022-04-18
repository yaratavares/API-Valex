import joi from "joi";

const buyPointsOfSale = joi.object({
  password: joi.string().pattern(/[0-9]/).required(),
  businessId: joi.number().required(),
  amount: joi.string().pattern(/[0-9]/).required(),
});

const paymentsSchemas = { buyPointsOfSale };

export default paymentsSchemas;
