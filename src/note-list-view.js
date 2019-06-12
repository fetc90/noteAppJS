function NoteListView(notelist) {
  this.notelist = notelist
  this.html1 = ['<ul>', '<li>', '<div>']
  this.html2 = ['</div>', '</li>', '</ul>']

  NoteListView.prototype.returnHtml = function(notelist) {
    var array = this.notelist.notes;
    var emptyArray = []

      array.forEach(function(item) {
      emptyArray.push(this.html1, item, this.html2)
      return emptyArray.join('');
    });
  }
};
