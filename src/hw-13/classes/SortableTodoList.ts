import { Note, TodoList } from './';
import { Status } from '../types';

export class SortableTodoList extends TodoList {
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
