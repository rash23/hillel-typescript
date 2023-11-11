import { Visitor } from './Visitor';
import { Ticket } from '../cashier/Ticket';

export class Client {
  visitor: Visitor;
  ticket: Ticket;

  constructor(visitor: Visitor, ticket: Ticket) {
    this.visitor = visitor;
    this.ticket = ticket;
  }
}
