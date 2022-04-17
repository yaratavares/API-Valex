import joi from "joi";

const newCard = joi.object({
  employeeId: joi.number().required(),
  type: joi
    .string()
    .valid("groceries", "restaurants", "transport", "education", "health")
    .required(),
});

const cardsSchema = { newCard };
export default cardsSchema;
