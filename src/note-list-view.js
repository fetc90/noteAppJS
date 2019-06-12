function NoteListView(notelist) {
  this.notelist = notelist

  NoteListView.prototype.returnHTML = function() {
    var array = this.notelist.notes;
    var emptyArray = [];

    emptyArray.push('<ul><li><div>');
    emptyArray.push(array.join('</div></li><li><div>'));
    emptyArray.push('</div></li></ul>');
    return emptyArray.join('');
  }
};
