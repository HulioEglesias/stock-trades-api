const express = require("express");
const router = express.Router();
const tradesController = require("../controllers/trades");
const tradeValidators = require("../validators/trades");

router.get("/", tradesController.getAll);
router.get("/:id", tradesController.getOne);
router.post("/", tradeValidators, tradesController.create);
router.all("*", tradesController.notAllowed);

module.exports = router;
