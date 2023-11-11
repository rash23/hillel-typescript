import { Clients } from '../clients/Clients';
import { IObserver, IObservable } from '../../types/observable';
import { Client } from '../clients/Client';

export class AdvertisingDepartment implements IObserver {
  clients: Client[] = [];

  update(observable: IObservable): void {
    if (observable instanceof Clients) {
      this.clients = observable.clientList;
      this.sendAdvertising();
    }
  }

  private sendAdvertising(): void {
    this.clients.forEach(client => {
      console.log(`${client.visitor.name}, the tickets on sale now.`);
    });
  }
}
