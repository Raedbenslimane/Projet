const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
const { AuthMiddleWares } = require("../MiddleWares/AuthMiddleWare");
const { DataValidation } = require("../MiddleWares/DataValidation");

router.post("/", DataValidation, UserController.Register);
router.post("/Login", DataValidation, UserController.Login);
router.get("/Login", AuthMiddleWares, UserController.getAllDataUsers);

module.exports = router;
