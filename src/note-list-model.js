function NoteList(){
  this.notes = [];
}

NoteList.prototype.storeNote = function(note) {
  this.notes.push(note);
};

NoteList.prototype.returnNotes = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(text) {
  var note = new Note(text);
  this.notes.push(note);
};
