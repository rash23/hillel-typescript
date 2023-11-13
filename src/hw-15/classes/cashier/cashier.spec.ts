import { Cashier } from './Cashier';
import { Ticket } from './Ticket';
import { Visitor } from '../clients/Visitor';
import { TicketTypeEnum } from '../../types/cashier';

jest.useFakeTimers();

describe('Cashier', () => {
  let cashier: Cashier;

  beforeEach(() => {
    cashier = new Cashier();
  });

  test('sellTicket should add visitor and client to the lists', () => {
    const visitor = new Visitor('John Doe', 'john@example.com');
    const ticket = new Ticket(TicketTypeEnum.Adult, 20);

    cashier.sellTicket(visitor, ticket);

    expect(cashier.totalRevenue).toBe(ticket.cost);
    expect(cashier['currentVisitors']).toContain(visitor);
    expect(cashier['clients']['clientList']).toContainEqual(expect.objectContaining({ visitor, ticket }));
  });

  test('notifyVisitorsBeforeLeaving should notify visitors and clear current visitors list', () => {
    const spy = jest.spyOn(console, 'log');
    const visitor = new Visitor('Alice Wonderland', 'alice@example.com');
    const ticket = new Ticket(TicketTypeEnum.Child, 15);

    cashier.sellTicket(visitor, ticket);
    cashier.notifyVisitorsBeforeLeaving();

    expect(spy).toHaveBeenCalledWith(`Notification for ${visitor.name}: Thank you for visiting!`);
    expect(cashier['currentVisitors']).toHaveLength(0);
  });
});
