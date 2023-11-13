import { Clients } from './Clients';
import { Client } from './Client';
import { Visitor } from './Visitor';
import { Ticket } from '../cashier/Ticket';
import { TicketTypeEnum } from '../../types/cashier';

describe('Clients', () => {
  let clients: Clients;

  beforeEach(() => {
    clients = new Clients();
  });

  test('addClient should add a client to the list and notify observers', () => {
    const spy = jest.spyOn(clients, 'notify');
    const visitor = new Visitor('John Doe', 'john@example.com');
    const ticket = new Ticket(TicketTypeEnum.Adult, 20);

    clients.addClient(visitor, ticket);

    expect(clients.clientList).toHaveLength(1);
    expect(clients.clientList[0]).toBeInstanceOf(Client);
    expect(clients.clientList[0].visitor).toBe(visitor);
    expect(clients.clientList[0].ticket).toBe(ticket);
    expect(spy).toHaveBeenCalled();
  });
});
