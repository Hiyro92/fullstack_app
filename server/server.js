const express = require('express');
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

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/getItems",(req,res) => {
    res.status(200)
    res.json(items)
})


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));