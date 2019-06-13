const mongoose = require("mongoose")

const UserSchama = new mongoose.Schema({
    username: {
        type: "String",
        required: [true,"can't be blank"],
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: [6, "You are to young! please come back with 6"]
    }
})

UserSchama.method.toJSONFor = () => {
    return{
        username: this.username,
        password: this.password,
        age: this.age
    }
}

mongoose.model("User", UserSchama)