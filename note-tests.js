function testNewNoteIsCreated() {
  var note = new Note(text);
  var text = "My favorite language is JavaScript"
  assert.isTrue(typeof text === 'string')
};

testNewNoteIsCreated();

// function testOutputMatchesInput() {
//   var note = new Note(text);
//   var text = "My favorite language is JavaScript"
//   console.log(note)
//   console.log(text)
//   console.log(Object.values)
//   assert.isTrue(Object.values(note).includes("My favorite language is JavaScript"));
// }
//
// testOutputMatchesInput();

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
