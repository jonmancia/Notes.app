var express = require('express');
var router = express.Router();
var Note = require('../models/notes');

router.get('/', function(req, res){
    Note.find( function(err, notes){
        res.render('notes', { notes: notes });
    });
});

router.post('/', function(req, res){
    new Note({
        title: req.body.title,
        description: req.body.description,
    }).save( function(err, note){
        res.redirect('/notes');
    });
});



module.exports = router;
