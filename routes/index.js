var express = require('express');
var router = express.Router();
var Note = require('../models/notes');

router.get('/', function(req, res){
    Note.find( function(err, notes){
        res.render('/', { notes: notes });
    });
});

router.post('/', function(req, res){
    new Note({
        title: req.body.title,
        description: req.body.description,
        updatedAt: Date.now()
    }).save( function(req, res){
        res.redirect('/');
    });
});

module.exports = router;