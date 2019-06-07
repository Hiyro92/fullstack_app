const express = require('express');
const { check, validationResult } = require('express-validator/check')
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

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/getItems", (req, res) => {
    setTimeout(() => {
        res.status(200)
        res.json(items)
    }, 5000)
})

app.post("/users", [
    check('name').isLength({ min: 5 }),
    check('password').isLength({ min: 5 })
], (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    res.json(req.json)
    return res.status(200)
})


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));