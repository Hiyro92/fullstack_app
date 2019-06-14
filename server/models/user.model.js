const mongoose = require("mongoose")

const UserSchama = new mongoose.Schema({
    username: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    }
})

mongoose.model("User", UserSchama)