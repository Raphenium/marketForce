const { body } = require("express-validator");

class TodoValidator {
  checkTransfer() {
    return [
      body("*.accountNumber")
        .notEmpty()
        .withMessage("The account number value should not be empty"),
      body("*.amount")
        .notEmpty()
        .withMessage("The amount value should not be empty")
        .isNumeric()
        .withMessage("The amount value should not be a Number"),
    ];
  }

  checkCreate() {
    return [
      body("accountNumber")
        .notEmpty()
        .withMessage("The account number value should not be empty"),
      body("phoneNumber")
        .notEmpty()
        .withMessage("The phone number value should not be empty")
        .isMobilePhone()
        .withMessage("The phone value should be proper mobile phone number"),
      body("amount")
        .notEmpty()
        .withMessage("The amount value should not be empty")
        .isNumeric()
        .withMessage("The amount value should not be a Number"),
    ];
  }
}

module.exports = new TodoValidator();
