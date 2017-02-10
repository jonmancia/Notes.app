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

router.get('/:id', function(req, res) {
  Note.findById(req.params.id, function(err, note) {
    res.render('note', { note: note });
  });
});

router.delete('/:id', function(req, res) {
  Note.findById(req.params.id, function(err, note) {
    note.remove( function(err, note) {
      res.redirect('/notes');
    });
  });
});

router.put('/:id', function(req, res) {
  Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      }
    },
    function(err, note) {
      res.redirect('/notes/' + req.params.id);
    }
  );
});

module.exports = router;
