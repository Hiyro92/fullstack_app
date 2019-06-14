const router = require("express").Router()

router.use("/", require("./users.route"))


module.exports = router