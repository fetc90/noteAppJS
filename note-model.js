function Note(text) {
  this._notes = [];
  this._notes.push(text);
}

Note.prototype.returnText = function() {
  return this._notes;
};
