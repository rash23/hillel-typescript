import { Note, TodoList } from './';

export class SearchableTodoList extends TodoList {
  constructor() {
    super();
  }

  override getNoteById(id: number): Note | undefined {
    const foundNote = this.notes.find(note => note.id === id);

    if (!foundNote) {
      console.log("Any notes aren't found.");
    }
    return foundNote;
  }

  searchNotesByTitleOrContent(keyword: string): Note[] {
    return this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword));
  }
}
