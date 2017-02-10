$(document).ready( function() {
  function toggleAddNoteForm() {
    $('#newNote').toggleClass('hide');
    $('#addNewNote').toggleClass('hide');
  }

  $('#addNewNote').click( function() {
    toggleAddNoteForm();
  })

  $('#cancelHide').click( function(){
    $('#newNote').toggleClass('hide');
    $('#addNewNote').toggleClass('hide');
  })

  function toggleEditNoteForm() {
    $('#editNote').toggleClass('hide');
    $('#noteDetails').toggleClass('hide');
    $('#editNoteButton').toggleClass('hide');
  }

  $('#editNoteButton').click( function() {
    toggleEditNoteForm();
  })

  $('#cancelNoteEdit').click( function(){
    $('#editNote').toggleClass('hide');
    $('#noteDetails').toggleClass('hide');
    $('#editNoteButton').toggleClass('hide');
  })
});
