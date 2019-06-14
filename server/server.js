const express = require("express")
const expressValidator = require('express-validator')
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()

//setup default middleware
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(express.static(__dirname + '/public'))

//connect to the database
mongoose.connect("mongodb://localhost/Users", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.set("debug",true)

//set the routes
app.use(require('./routes'))

//page not found handling 404
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handling
app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
        'errors': {
            message: err.message,
            error: err
        }
    });
});

//start the server
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${server.address().port}`);
})