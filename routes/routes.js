const express = require("express");
const controller = require("../controllers/controller");
const Validator = require("../validator");
const Middleware = require("../middleware");

const router = express.Router();

router.patch(
  "/transfer",
  Validator.checkTransfer(),
  Middleware.handleValidationError,
  controller.transfer
);
router.post(
  "/",
  Validator.checkCreate(),
  Middleware.handleValidationError,
  controller.create
);

module.exports = router;
