import { IObserver, IObservable } from '../../types/observable';
import { Cashier } from '../cashier/Cashier';

export class Revenue implements IObserver {
  private _totalRevenue: number = 0;

  public get totalRevenue(): number {
    return this._totalRevenue;
  }

  public update(observable: IObservable): void {
    if (observable instanceof Cashier) {
      this._totalRevenue += observable.totalRevenue;
      console.log(`Revenue updated. Total: ${this.totalRevenue}`);
    }
  }

  public addToTotalRevenue(amount: number): void {
    this._totalRevenue += amount;
  }
}
