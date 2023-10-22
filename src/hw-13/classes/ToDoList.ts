import { Note } from './Note';
import { Status, NoteType, UpdatedNote } from '../types';

export class TodoList {
  protected notes: Note[] = [];

  get allNotes(): Note[] {
    return this.notes;
  }

  get notesCount(): number {
    return this.notes.length;
  }

  get notDoneNotesCount(): number {
    return this.notes.filter(note => note.status !== Status.DONE).length;
  }

  addNote(title: string, content: string, status: Status, isConfirmed: boolean, type?: NoteType): void {
    if (!title || !content) {
      throw new Error('The title and content of the note cannot be empty.');
    }

    const id = this.notes.length + 1;
    const createdDate = new Date();
    const updatedDate = new Date();
    const note = new Note(id, title, content, createdDate, updatedDate, status, isConfirmed, type);
    this.notes.push(note);
  }

  deleteNote(id: number): void {
    this.notes.filter(note => note.id !== id);
  }

  editNoteById(id: number, { title, content, status, type }: UpdatedNote): void {
    const note = this.getNoteById(id);

    if (!note) {
      throw new Error('Note not found');
    }

    const editedNote = { ...note, title, content, status, type };

    note.editNote(editedNote);
    console.log('note was updated:', note);
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  changeConfirmedById(id: number): void {
    const note = this.getNoteById(id);

    if (!note) {
      throw new Error('Note not found');
    }

    note.changeConfirmed();
  }
}
