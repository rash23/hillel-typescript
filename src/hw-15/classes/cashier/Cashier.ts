import { Ticket } from './Ticket';
import { Visitor } from '../clients/Visitor';
import { Clients } from '../clients/Clients';
import { Observable } from '../observable/Observable';

export class Cashier extends Observable {
  static CLOSING_TIME: number = 18;
  static NOTIFY_BEFORE_CLOSING: number = 15;

  private currentVisitors: Visitor[] = [];
  private clients: Clients = new Clients();

  public get totalRevenue(): number {
    // Calculate total revenue based on the client's purchases
    return this.clients.clientList.reduce((total, client): number => {
      return total + client.ticket.cost;
    }, 0);
  }

  public sellTicket(visitor: Visitor, ticket: Ticket): void {
    // Add visitor data to the current visitors and clients
    this.currentVisitors.push(visitor);
    this.clients.addClient(visitor, ticket);

    console.log(`Ticket for ${ticket.type} sold to ${visitor.name}.`);
  }

  public notifyVisitorsBeforeClosing(): void {
    // Notify visitors 15 minutes before closing
    const currentTime = new Date().getHours();
    if (Cashier.CLOSING_TIME - currentTime === Cashier.NOTIFY_BEFORE_CLOSING) {
      this.currentVisitors.forEach(visitor => {
        console.log(`Notification for ${visitor.name}: Closing in 15 minutes!`);
      });
    }
  }

  public notifyVisitorsBeforeLeaving(): void {
    // Notify visitors before leaving
    this.currentVisitors.forEach(visitor => {
      console.log(`Notification for ${visitor.name}: Thank you for visiting!`);
    });

    // Clear the list of current visitors
    this.currentVisitors = [];
  }
}
