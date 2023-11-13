import { AdvertisingDepartment } from './AdvertisingDepartment';
import { Clients } from '../clients/Clients';
import { Client } from '../clients/Client';
import { Visitor } from '../clients/Visitor';
import { Ticket } from '../cashier/Ticket';
import { TicketTypeEnum } from '../../types/cashier';

describe('AdvertisingDepartment', () => {
  let advertisingDepartment: AdvertisingDepartment;

  beforeEach(() => {
    advertisingDepartment = new AdvertisingDepartment();
  });

  test('update should send advertising when clients list is updated', () => {
    const spy = jest.spyOn(console, 'log');
    const clients = new Clients();

    const visitor1 = new Visitor('John Doe', 'john@example.com');
    const ticket1 = new Ticket(TicketTypeEnum.Adult, 20);
    const client1 = new Client(visitor1, ticket1);

    const visitor2 = new Visitor('Jane Doe', 'jane@example.com');
    const ticket2 = new Ticket(TicketTypeEnum.Family, 50);
    const client2 = new Client(visitor2, ticket2);

    clients.addClient(visitor1, ticket1);
    clients.addClient(visitor2, ticket2);

    advertisingDepartment.update(clients);

    expect(spy).toHaveBeenCalledWith(`${client1.visitor.name}, the tickets on sale now.`);
    expect(spy).toHaveBeenCalledWith(`${client2.visitor.name}, the tickets on sale now.`);
  });

  test('sendAdvertising should log advertising messages for each client', () => {
    const spy = jest.spyOn(console, 'log');
    const clients = new Clients();

    const visitor1 = new Visitor('John Doe', 'john@example.com');
    const ticket1 = new Ticket(TicketTypeEnum.Adult, 20);
    const client1 = new Client(visitor1, ticket1);

    const visitor2 = new Visitor('Jane Doe', 'jane@example.com');
    const ticket2 = new Ticket(TicketTypeEnum.Family, 50);
    const client2 = new Client(visitor2, ticket2);

    clients.addClient(visitor1, ticket1);
    clients.addClient(visitor2, ticket2);

    advertisingDepartment.clients = [client1, client2];
    advertisingDepartment.sendAdvertising();

    expect(spy).toHaveBeenCalledWith(`${client1.visitor.name}, the tickets on sale now.`);
    expect(spy).toHaveBeenCalledWith(`${client2.visitor.name}, the tickets on sale now.`);
  });
});
