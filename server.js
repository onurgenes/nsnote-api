const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const fs = require('fs');
const {mongoose} = require('./db/mongoose');

// Models
const {Note} = require('./models/note');
const {User} = require('./models/user');

// Middlewares
const {authenticate} = require('./middleware/authenticate');

// Create server
const server = express();
server.use(bodyParser.json());
server.disable('x-powered-by');

// Port
var port = process.env.PORT || 8000;

server.get('/hello', (req, res) => {
    res.status(200).json({hello: 'from other side'});
});

//
// NOTE FUNCTIONS
//

server.post('/note', authenticate, (req, res) => {
    var body = _.pick(req.body, ['name', 'owner', 'detail']);
    var note = new Note(body);

    note.save().then((note) => {
        res.status(200).send(note);
    }, (e) => {
        res.status(400).json({ error: error.toString() });
    });
});

server.get('/note', authenticate, (req, res) => {
    Note.find().then((notes) => {
        res.status(200).send(notes);
    }, (e) => {
        res.status(400).json({ error: error.toString() });
    })
})

//
// USER FUNCTIONS
//

// Create user
server.post('/user', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'username']);
    var user = new User(body);

    if (req.emailerror) {
        return res.status(500).json({ error: req.emailerror.toString() });
    };

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user.toJson());
    }).catch((e) => {
        res.status(400).json({ error: e.toString() });
    })
});

// Login
server.post('/user/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
  
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.status(200).header('x-auth', token).send(user.toJson());
        });
    }).catch((e) => {
        res.status(400).json({ error: e.toString() });
    });
});

// Start server
server.listen(port, () => {
    console.log(`nsnote-api listening on port ${port}!`)
});