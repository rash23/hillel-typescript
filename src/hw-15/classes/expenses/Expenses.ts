export class Expenses {
  private _expenses: number = 0;

  public get expensesCount(): number {
    return Math.max(0, this._expenses); // Ensure expensesCount is not negative
  }

  public addExpenses(amount: number): void {
    if (amount >= 0) {
      this._expenses += amount;
    }
  }
}
