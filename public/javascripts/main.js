$(document).ready( function() {
  function toggleAddNoteForm() {
    $('#newNote').toggleClass('hide');
  }

  $('#addNewNote').click( function() {
    toggleAddNoteForm();
  })

  function toggleEditNoteForm() {
    $('#editNote').toggleClass('hide');
    $('#noteDetails').toggleClass('hide');
  }

  $('#editNoteButton').click( function() {
    toggleEditNoteForm();
  })

  $('#cancelHide').click( function(){
    $('#newNote').toggleClass('hide');
  })
});
