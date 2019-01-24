const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const fs = require('fs');
const {mongoose} = require('./db/mongoose');

// create app
const app = express();
app.use(bodyParser.json());
var port = process.env.PORT || 8000; // port





app.listen(port, () => {
    console.log(`nsnote-api listening on port ${port}!`)
});