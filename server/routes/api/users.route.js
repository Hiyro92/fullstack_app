const router = require("express").Router()
const users = require("../../controller/user.controller")

router.post("/users",users.validate("createUser"),users.create)

module.exports = router