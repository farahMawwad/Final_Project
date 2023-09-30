const express = require("express");
const userController = require("../controller/Controller");
const router = express.Router();


router.route("/").get(userController.home);
router.route("/signup").post(userController.signup);
router.route("/login").get(userController.login);
router.route("/search").get(userController.search);
router.route("/budget").get(userController.budget);
router.route("/cart/:id").get(userController.cart);
router.route("/like/:id").get(userController.like);
router.route("/:PopularTags").get(userController.PopularTags);
router.route("/:PopularTags/:type").get(userController.PopularTagstype);
router.route("/profile").post(userController.profile);



module.exports = router;