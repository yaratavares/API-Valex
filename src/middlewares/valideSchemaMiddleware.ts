import { NextFunction, Request, Response } from "express";

export default function validateSchemaMiddleware(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const err = validation.error.details.map((detail) => detail.message);
      return res.status(422).send(err);
    }

    next();
  };
}
