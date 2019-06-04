const express = require('express');
const { check } = require('express-validator/check')
var cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const API_PORT = 3001;

const items = [
    {
        name: 'Haus',
        price: 123
    },
    {
        name: 'Pool',
        price: 321
    }
]

const validation = [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
]

const app = express();
app.use(cors());

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/getItems",(req,res) => {
    res.status(200)
    res.json(items)
})

app.post("/getItems",validation,(req,res) =>{
    res.status(404)
    res.send("asd");
})


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));