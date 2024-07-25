// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
