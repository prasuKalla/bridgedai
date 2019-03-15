const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Config = require('./config/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/mail', require('./api/mailer/index'));

const server = app.listen(Config.port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});