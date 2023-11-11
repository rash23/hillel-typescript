export enum TicketTypeEnum {
  Adult = 'Adult',
  Child = 'Child',
  Family = 'Family',
}

export interface ITicket {
  type: TicketTypeEnum;
  cost: number;
}
