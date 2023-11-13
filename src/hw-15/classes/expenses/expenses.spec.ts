import { Expenses } from './Expenses';

describe('Expenses', () => {
  let expenses: Expenses;

  beforeEach(() => {
    expenses = new Expenses();
  });

  test('expensesCount should initially be 0', () => {
    expect(expenses.expensesCount).toBe(0);
  });

  test('addExpenses should increase expensesCount correctly', () => {
    const initialExpenses = expenses.expensesCount;
    const amountToAdd = 100;

    expenses.addExpenses(amountToAdd);

    expect(expenses.expensesCount).toBe(initialExpenses + amountToAdd);
  });

  test('addExpenses should handle negative amounts correctly', () => {
    const initialExpenses = expenses.expensesCount;
    const negativeAmount = -50;

    expenses.addExpenses(negativeAmount);

    expect(expenses.expensesCount).toBe(initialExpenses);
  });
});
