import { Budget } from './Budget';

describe('Budget', () => {
  let budget: Budget;

  beforeEach(() => {
    budget = new Budget();
  });

  test('addToRevenue should add to total revenue', () => {
    const initialRevenue = budget.revenue;
    const amountToAdd = 100;

    budget.addToRevenue(amountToAdd);

    expect(budget.revenue).toBe(initialRevenue + amountToAdd);
  });

  test('addExpenses should add to total expenses', () => {
    const initialExpenses = budget.expenses;
    const amountToAdd = 50;

    budget.addExpenses(amountToAdd);

    expect(budget.expenses).toBe(initialExpenses + amountToAdd);
  });

  test('profit should be calculated correctly', () => {
    const revenue = 500;
    const expenses = 200;

    budget.addToRevenue(revenue);
    budget.addExpenses(expenses);

    expect(budget.profit).toBe(revenue - expenses);
  });

  test('financialReport should print the correct information', () => {
    const spy = jest.spyOn(console, 'log');

    budget.addToRevenue(1000);
    budget.addExpenses(500);
    budget.financialReport();

    expect(spy).toHaveBeenCalledWith('Financial Report:');
    expect(spy).toHaveBeenCalledWith(`Total Revenue: $${budget.revenue}`);
    expect(spy).toHaveBeenCalledWith(`Expenses: $${budget.expenses}`);
    expect(spy).toHaveBeenCalledWith(`Profit: $${budget.profit}`);
  });
});
