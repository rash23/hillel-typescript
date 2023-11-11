import { TicketTypeEnum } from '../../types/cashier';
import { ITicket } from '../../types/cashier';

export class Ticket implements ITicket {
  type: TicketTypeEnum;
  cost: number;

  constructor(type: TicketTypeEnum, cost: number) {
    this.type = type;
    this.cost = cost;
  }
}
