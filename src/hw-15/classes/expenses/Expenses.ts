export class Expenses {
  private _expenses: number = 0;

  public get expensesCount(): number {
    return this._expenses;
  }

  public addExpenses(amount: number): void {
    this._expenses += amount;
  }
}
