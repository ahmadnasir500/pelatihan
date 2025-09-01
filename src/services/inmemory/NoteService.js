class NoteService {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    this.notes.push(note);
    return note;
  }

  getNotes() {
    return this.notes;
  }

  getNoteById(id) {
    return this.notes.find((note) => note.id === id);
  }

  updateNote(id, updatedNote) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes[index] = { ...this.notes[index], ...updatedNote };
      return this.notes[index];
    }
    return null;
  }

  deleteNote(id) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      return this.notes.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = NoteService;