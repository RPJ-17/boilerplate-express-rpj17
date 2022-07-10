let express = require('express');
let app = express();
require('dotenv').config();

app.use('/public', express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.send({"message": "HELLO JSON", "message style": process.env.MESSAGE_STYLE});
    } else {
        res.send({"message": "Hello json", "message style": process.env.MESSAGE_STYLE});
    }
});




































 module.exports = app;
