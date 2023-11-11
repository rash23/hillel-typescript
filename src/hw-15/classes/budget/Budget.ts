import { Observable } from '../observable/Observable';
import { Revenue } from '../revenue/Revenue';
import { Expenses } from '../expenses/Expenses';

export class Budget extends Observable {
  private _revenue = new Revenue();
  private _expenses = new Expenses();

  public get revenue(): number {
    return this._revenue.totalRevenue;
  }

  public get expenses(): number {
    return this._expenses.expensesCount;
  }

  public get profit(): number {
    return this._revenue.totalRevenue - this._expenses.expensesCount;
  }

  public addToRevenue(amount: number): void {
    this._revenue.addToTotalRevenue(amount);
    this.notify();
  }

  public addExpenses(amount: number): void {
    this._expenses.addExpenses(amount);
    this.notify();
  }

  // Бюджетний облік і фінансові звіти
  financialReport(): void {
    console.log('Financial Report:');
    console.log(`Total Revenue: $${this._revenue.totalRevenue}`);
    console.log(`Expenses: $${this._expenses.expensesCount}`);
    console.log(`Profit: $${this.profit}`);
    this.notify();
  }
}
