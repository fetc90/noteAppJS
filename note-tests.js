function testNewNoteIsCreated() {
  var note = new Note(text);
  var text = "My favorite language is JavaScript"
  assert.isTrue(typeof text === 'string')
};

testNewNoteIsCreated();

function testNoteCanBeStored() {
  var note = new Note("My favorite language is JavaScript")
  assert.isTrue(note._notes.length === 1);
};

testNoteCanBeStored();

function testNoteCanReturnText() {
  var newNote = new Note("My favorite language is JavaScript")
  assert.isTrue(newNote.returnText()[0] === "My favorite language is JavaScript");
};

testNoteCanReturnText();

describe('notelist', function() {
  var notelist = new NoteList();

  it('adds multiple note models to an array', function() {
    var note = new Note('manatee');
    notelist.storeNote(note);

    expect(notelist.notes.length === 1);
  });

  describe('#returnNotes', function() {
    it('returns all notes', function() {
      var note = new Note('manatee');
      notelist.storeNote(note);

      expect(notelist.returnNotes() === 'manatee');
    });
  });

  describe('#createNote', function() {
    it('creates and stores a new single note model', function() {
      notelist.createNote('stingrays');
      expect(notelist.notes.length === 1);
    });
  });

});

describe('notelistview',function() {
  var notelist = new NoteList();
  notelist.createNote('jellyfish');
  var notelistview = new NoteListView(notelist);

  it('takes a note model upon instantiation',function() {
    expect(notelistview === notelist);
  });

  describe('#returnHTML',function() {
    var notelist = new NoteList();
    notelist.createNote('jellyfish');
    notelist.createNote('stingray');
    var notelistview = new NoteListView(notelist);

    it('returns a string of HTML that represents the notelist model',function() {
      expect(notelistview.returnHtml() === '<ul><li><div>jellyfish</div></li><li><div>stingray</div></li></ul>');
    });
  });

});
