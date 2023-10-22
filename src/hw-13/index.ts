import { Status } from './types';
import { TodoList, SearchableTodoList, SortableTodoList } from './classes';

// Examples

// **************************************************************
// const todoList = new TodoList();

// todoList.addNote('task 1', 'to do till 15:00', Status.TODO, false, 'confirm');
// todoList.addNote('task 2', 'call to the client', Status.DONE, true);

// console.log('allNotes', todoList.allNotes);
// console.log('notesCount', todoList.notesCount);
// console.log('notDoneNotesCount', todoList.notDoneNotesCount);

// todoList.getNoteById(1);
// todoList.getNoteById(2);

// todoList.changeConfirmedById(1); // confirm task #1 to not have the error

// todoList.editNoteById(1, {
//   title: 'Edited Task 1',
//   content: 'to do till 16:00',
//   status: Status.IN_PROGRESS,
// });

// todoList.editNoteById(2, {
//   title: 'Edited Task 2',
//   content: 'to do till 16:00',
//   status: Status.IN_PROGRESS,
// });

// todoList.editNoteById(1, {
//   status: Status.DONE,
// });

// **************************************************************
// const searchableTodoList = new SearchableTodoList();

// searchableTodoList.addNote('task 1', 'to do till 15:00', Status.TODO, false);
// searchableTodoList.addNote('task 2', 'call to the client', Status.TODO, true);

// console.log(searchableTodoList.searchNotesByTitleOrContent('to do till 15:00'));
// console.log(searchableTodoList.searchNotesByTitleOrContent('to do till 16:00'));

// **************************************************************
// const sortableTodoList = new SortableTodoList();
// sortableTodoList.addNote('task 1', 'to do till 15:00', Status.TODO, false);
// sortableTodoList.addNote('task 2', 'call to the client1', Status.DONE, true);
// sortableTodoList.addNote('task 2', 'call to the client2', Status.TODO, true);
// sortableTodoList.addNote('task 2', 'call to the client3', Status.IN_PROGRESS, true);

// console.log('sortNotesByStatus', sortableTodoList.sortNotesByStatus(Status.TODO));

// console.log('sortNotesByCreatedDate', sortableTodoList.sortNotesByCreatedDate());
