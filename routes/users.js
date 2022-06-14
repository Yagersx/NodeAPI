const express = require("express");
const router = express.Router();
const { createUserValidator } = require("../validators/users");
const {getUsers,getUserById, createUser} = require('../controllers/users')
router.get("/", getUsers);
router.get("/:id", getUserById);

//adding validator to this route
router.post("/", createUserValidator ,createUser);


module.exports = router;