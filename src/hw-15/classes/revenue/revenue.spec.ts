import { Revenue } from './Revenue';
import { Cashier } from '../cashier/Cashier';
import { Ticket } from '../cashier/Ticket';
import { Visitor } from '../clients/Visitor';
import { TicketTypeEnum } from '../../types/cashier';

describe('Revenue', () => {
  let revenue: Revenue;

  beforeEach(() => {
    revenue = new Revenue();
  });

  test('totalRevenue should initially be 0', () => {
    expect(revenue.totalRevenue).toBe(0);
  });

  test('addToTotalRevenue should increase totalRevenue correctly', () => {
    const initialTotalRevenue = revenue.totalRevenue;
    const amountToAdd = 50;

    revenue.addToTotalRevenue(amountToAdd);

    expect(revenue.totalRevenue).toBe(initialTotalRevenue + amountToAdd);
  });

  test('update should increase totalRevenue based on Cashier', () => {
    const cashier = new Cashier();
    const visitor = new Visitor('John Doe', 'john@example.com');
    const ticket = new Ticket(TicketTypeEnum.Adult, 20);

    cashier.sellTicket(visitor, ticket);
    revenue.update(cashier);

    expect(revenue.totalRevenue).toBe(ticket.cost);
  });

  test('update should handle multiple updates correctly', () => {
    const cashier1 = new Cashier();
    const cashier2 = new Cashier();
    const visitor1 = new Visitor('Alice Wonderland', 'alice@example.com');
    const visitor2 = new Visitor('Bob Builder', 'bob@example.com');
    const ticket1 = new Ticket(TicketTypeEnum.Child, 15);
    const ticket2 = new Ticket(TicketTypeEnum.Family, 30);

    cashier1.sellTicket(visitor1, ticket1);
    revenue.update(cashier1);

    cashier2.sellTicket(visitor2, ticket2);
    revenue.update(cashier2);

    expect(revenue.totalRevenue).toBe(ticket1.cost + ticket2.cost);
  });
});
