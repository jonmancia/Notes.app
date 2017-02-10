var express = require('express');
var router = express.Router();
var Note = require('../models/song');

router.get('/', function(req, res){
    Note.find( function(err, songs){
        res.render('index', { notes: notes });
    });
});

router.post('/', function(req, res){
    new Note({
        title: req.body.title,
        description: req.body.description,
        updatedAt: Date.now()
    }).save( function(req, res){
        res.redirect('/index');
    });
});

module.exports = router;