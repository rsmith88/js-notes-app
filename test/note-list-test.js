(function(exports) {
  function testCanStoreNotes() {
    var notelist = new NoteList()
    console.log(notelist.getNotes());
    assert.isInstanceOf(notelist.getNotes(), Array)
  }
  testCanStoreNotes()
  function testCanAddNotes() {
    var notelist = new NoteList()
    notelist.addNote("My first note!")
    assert.isEqualTo(notelist.getNotes()[0].getText(), "My first note!")
  }
  testCanAddNotes()
})(this)
