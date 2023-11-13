import { Clients } from '../clients/Clients';
import { Client } from '../clients/Client';
import { IObserver, IObservable } from '../../types/observable';

export class AdvertisingDepartment implements IObserver {
  clients: Client[] = [];

  update(observable: IObservable): void {
    if (observable instanceof Clients) {
      this.clients = observable.clientList;
      this.sendAdvertising();
    }
  }

  public sendAdvertising(): void {
    this.clients.forEach(client => {
      console.log(`${client.visitor.name}, the tickets on sale now.`);
    });
  }
}
