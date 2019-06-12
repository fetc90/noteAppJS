function testNewNoteIsCreated() {
  var note = new Note(text);
  var text = "My favorite language is JavaScript"
  assert.isTrue(typeof text === 'string')
};

testNewNoteIsCreated();

function testNoteCanBeStored() {
  var note = new Note("My favorite language is JavaScript")
  assert.isTrue(note.text === "My favorite language is JavaScript");
};

testNoteCanBeStored();

function testNoteCanReturnText() {
  var note = new Note("My favorite language is JavaScript")
  var notelist = new NoteList();
  notelist.storeNote(note.text);
  assert.isTrue(notelist.returnNotes()[0] === "My favorite language is JavaScript");
};

testNoteCanReturnText();

function testNoteListAddsModels(){
  var notelist = new NoteList();
  var note = new Note('manatee');
  notelist.storeNote(note);
  assert.isTrue(notelist.notes.length === 1);
};

testNoteListAddsModels();

function testCreateAndStoreNoteModel() {
  var notelist = new NoteList();
  notelist.createNote('stingrays');
  assert.isTrue(notelist.notes.length === 1);
  assert.isTrue(notelist.returnNotes()[0] === 'stingrays');
};

testCreateAndStoreNoteModel();


function testNoteListViewTakesModel() {
  var notelist = new NoteList();
  notelist.createNote('jellyfish');
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.notelist.notes.length === 1);
};

testNoteListViewTakesModel();

function testReturnHTML() {
  var notelist = new NoteList();
  notelist.createNote('jellyfish');
  notelist.createNote('octopus');
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === '<ul><li><div>jellyfish</div></li><li><div>octopus</div></li></ul>');
};

testReturnHTML();
