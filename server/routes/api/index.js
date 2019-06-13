const router = require("express").Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.post("/test", (req, res, next) => {
    const user = new User()

    user.username = req.body.user.username
    user.password = req.body.user.password
    user.age = req.body.user.age

    user.save().then(() => {
        return res.json({ user: user.toJSON(user) })
    }).catch(next)

})

router.get("/test", (req,res,next) => {
    console.log(req.hostname);
    
    //next(new Error("schlecht"))
})

module.exports = router