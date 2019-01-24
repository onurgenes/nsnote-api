const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const fs = require('fs');
const {mongoose} = require('./db/mongoose');

const {Note} = require('./models/note');

// create app
const app = express();
app.use(bodyParser.json());
var port = process.env.PORT || 8000; // port

app.get('/hello', (req, res) => {
    res.status(200).json({hello: 'from other side'});
});

app.post('/note', (req, res) => {
    var body = _.pick(req.body, ['name', 'owner', 'detail']);
    var note = new Note(body);

    note.save().then((note) => {
        res.status(200).send(note);
    }, (e) => {
        res.status(400).json({ error: error.toString() });
    });
});

app.get('/note', (req, res) => {
    Note.find().then((notes) => {
        res.status(200).send(notes);
    }, (e) => {
        res.status(400).json({ error: error.toString() });
    })
})

app.listen(port, () => {
    console.log(`nsnote-api listening on port ${port}!`)
});