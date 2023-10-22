import { INote, Status, NoteType, UpdatedNote } from '../types';

export class Note implements INote {
  constructor(
    public readonly id: number,
    public title: string,
    public content: string,
    public readonly createdDate: Date,
    public updatedDate: Date,
    public status: Status,
    public isConfirmed: boolean,
    public type: NoteType = 'default'
  ) {}

  editNote(updatedNote: UpdatedNote): void {
    if (this.type === 'confirm' && !this.isConfirmed) {
      throw new Error('Confirmation is required for this note');
    }

    this.title = updatedNote.title ?? this.title;
    this.content = updatedNote.content ?? this.content;
    this.updatedDate = new Date();
    this.status = updatedNote.status ?? this.status;
    this.type = updatedNote.type ?? this.type;
  }

  changeConfirmed(): void {
    this.isConfirmed = !this.isConfirmed;
  }
}
