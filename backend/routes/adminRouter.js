const express = require("express");
const AdminController = require("../controller/adminController");
const router = express.Router();
router.route("/Profits").post(AdminController.Profits);
router.route("/Visits").post(AdminController.Visits);
router.route("/Purchases").post(AdminController.Purchases);

module.exports = router