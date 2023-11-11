import { Client } from './Client';
import { Visitor } from './Visitor';
import { Ticket } from '../cashier/Ticket';
import { Observable } from '../observable/Observable';

export class Clients extends Observable {
  private clients: Client[] = [];

  public get clientList(): Client[] {
    return this.clients;
  }

  public addClient(visitor: Visitor, ticket: Ticket): void {
    const client = new Client(visitor, ticket);
    this.clients.push(client);
    this.notify();
  }
}
