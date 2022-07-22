import {body, validationResult } from "express-validator";

export const validatorRegister = (req) => {
  body("firstname").isLenght({min: 2, max: 40})
  body("lastname").isLenght({min: 2, max: 40})
  body("birthdate").isDate("DD/MM/YYYY")
  body("username").isLenght({min: 2, max:20})

}