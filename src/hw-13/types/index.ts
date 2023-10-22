export enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type NoteType = 'default' | 'confirm';

export interface INote {
  id: number;
  title: string;
  content: string;
  createdDate: Date;
  updatedDate: Date;
  status: Status;
  isConfirmed: boolean;
  type: NoteType;
}

type PartialNote = Partial<INote>;

export type UpdatedNote = Pick<PartialNote, 'title' | 'content' | 'status' | 'type'>;
