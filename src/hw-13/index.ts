/* eslint-disable no-console */
enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface INote {
  id: number;
  title: string;
  content: string;
  createdDate: Date;
  updatedDate: Date;
  status: Status;
  isConfirmed: boolean;
}

type PartialNote = Partial<INote>;
type UpdatedNote = Omit<PartialNote, 'createdDate' | 'updatedDate' | 'id'>;

class Note implements INote {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdDate: Date,
    public updatedDate: Date,
    public status: Status,
    public isConfirmed: boolean
  ) {}
}

class TodoList {
  protected notes: Note[] = [];

  get allNotes(): Note[] {
    return this.notes;
  }

  get noteCount(): number {
    return this.notes.length;
  }

  get notDoneNoteCount(): number {
    return this.notes.filter(note => note.status !== Status.DONE).length;
  }

  addNote(title: string, content: string, status: Status, isConfirmed: boolean): Note {
    if (!title || !content) {
      throw new Error('The title and content of the note cannot be empty.');
    }

    const id = this.notes.length + 1;
    const createdDate = new Date();
    const updatedDate = new Date();
    const note = new Note(id, title, content, createdDate, updatedDate, status, isConfirmed);
    this.notes.push(note);
    return note;
  }

  deleteNote(id: number): void {
    this.notes.filter(note => note.id !== id);
  }

  editNote(id: number, { title, content, status, isConfirmed }: UpdatedNote): Note {
    const note = this.getNoteById(id);
    if (!note) {
      throw new Error('Note not found');
    }

    if (!note.isConfirmed) {
      throw new Error('Confirmation is required for this note');
    }

    if (isConfirmed !== undefined) {
      note.isConfirmed = isConfirmed;
    }

    return {
      ...note,
      title: title ?? note.title,
      content: content ?? note.content,
      status: status ?? note.status,
      updatedDate: new Date(),
    };
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  markNoteAsConfirmed(id: number): Note {
    const note = this.getNoteById(id);
    if (!note) {
      throw new Error('Note not found');
    }
    note.isConfirmed = true;
    return note;
  }
}

class SearchableTodoList extends TodoList {
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

class SortableTodoList extends TodoList {
  constructor() {
    super();
  }

  sortNotesByStatus(targetStatus: Status): Note[] {
    const statusOrder: Record<Status, number> = {
      [Status.TODO]: 3,
      [Status.IN_PROGRESS]: 2,
      [Status.DONE]: 1,
    };

    return this.notes.sort((a, b) => {
      if (a.status === targetStatus && b.status !== targetStatus) {
        return -1;
      } else if (a.status !== targetStatus && b.status === targetStatus) {
        return 1;
      }
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }

  sortNotesByCreatedDate(): Note[] {
    return this.notes.slice().sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
  }
}

// Examples

// **************************************************************
const todoList = new TodoList();

const note1 = todoList.addNote('task 1', 'to do till 15:00', Status.TODO, false);
const note2 = todoList.addNote('task 2', 'call to the client', Status.DONE, true);

console.log('allNotes', todoList.allNotes);
console.log('noteCount', todoList.noteCount);
console.log('notDoneNoteCount', todoList.notDoneNoteCount);

todoList.markNoteAsConfirmed(note1.id);

console.log(
  'Edit Note',
  todoList.editNote(note2.id, {
    title: 'Edited Task 2',
    content: 'to do till 16:00',
    status: Status.IN_PROGRESS,
    isConfirmed: false,
  })
);

// console.log(
//   'Change Status',
//   todoList.editNote(note2.id, {
//     status: Status.DONE,
//     isConfirmed: true,
//   })
// );

// **************************************************************
// const searchableTodoList = new SearchableTodoList();

// const searchableNote1 = searchableTodoList.addNote('task 1', 'to do till 15:00', Status.TODO, false);
// const searchableNote2 = searchableTodoList.addNote('task 2', 'call to the client', Status.TODO, true);
// console.log('searchNotesByTitleOrContent', searchableTodoList.searchNotesByTitleOrContent('to do till 15:00')); // found
// console.log('searchNotesByTitleOrContent', searchableTodoList.searchNotesByTitleOrContent('to do till 16:00')); // not found

// **************************************************************
// const sortableTodoList = new SortableTodoList();
// const sortableNote1 = sortableTodoList.addNote('task 1', 'to do till 15:00', Status.TODO, false);
// const sortableNote2 = sortableTodoList.addNote('task 2', 'call to the client1', Status.DONE, true);
// const sortableNote3 = sortableTodoList.addNote('task 2', 'call to the client2', Status.TODO, true);
// const sortableNote4 = sortableTodoList.addNote('task 2', 'call to the client3', Status.IN_PROGRESS, true);
// console.log(sortableTodoList.allNotes);

// console.log('sortNotesByStatus', sortableTodoList.sortNotesByStatus(Status.TODO));
// console.log('sortNotesByCreatedDate', sortableTodoList.sortNotesByCreatedDate());
