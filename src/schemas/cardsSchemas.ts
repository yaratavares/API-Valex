import joi from "joi";

const newCard = joi.object({
  employeeId: joi.number().required(),
  type: joi
    .string()
    .valid("groceries", "restaurants", "transport", "education", "health")
    .required(),
});

const activateCard = joi.object({
  securityCode: joi.string().required(),
  password: joi.string().length(4).pattern(/[0-9]/).required(),
});

const cardsSchema = { newCard, activateCard };
export default cardsSchema;
