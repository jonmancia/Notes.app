$(document).ready( function() {
  function toggleAddNoteForm() {
    $('#newNote').toggleClass('hide');
  }

  $('#addNewNote').click( function() {
    toggleAddNoteForm();
  })
});
