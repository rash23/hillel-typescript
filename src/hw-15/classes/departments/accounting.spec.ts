import { AccountingDepartment } from './AccountingDepartment';
import { Employee } from '../employees/Employee';
import { Animal } from '../animals/Animal';

describe('AccountingDepartment', () => {
  let accountingDepartment: AccountingDepartment;

  beforeEach(() => {
    accountingDepartment = new AccountingDepartment();
  });

  test('addEmployee should add an employee to the list', () => {
    const zooKeeper = new Employee('John Doe', 50000, 'Zoo Keeper', ['Taking care of animals', 'Cleaning enclosures']);
    accountingDepartment.addEmployee(zooKeeper);

    expect(accountingDepartment['employees']['employeesList']).toContain(zooKeeper);
  });

  test('addAnimal should add an animal to the list', () => {
    const animal = new Animal('Tiger', 'Tony', 5, 'Good', 2000);
    accountingDepartment.addAnimal(animal);

    expect(accountingDepartment['animals']['animalsList']).toContain(animal);
  });

  test('recordExpense should record expenses correctly', () => {
    const initialExpenses = accountingDepartment['expenses'];
    const expenseToAdd = 1000;

    accountingDepartment.recordExpense(expenseToAdd);

    expect(accountingDepartment['expenses']).toBe(initialExpenses + expenseToAdd);
  });

  test('generateFinancialReport should print the correct information', () => {
    const spy = jest.spyOn(console, 'log');
    const zooKeeper = new Employee('Alice Wonderland', 60000, 'Zoo Keeper', [
      'Taking care of animals',
      'Cleaning enclosures',
    ]);
    const elephant = new Animal('Elephant', 'Dumbo', 10, 'Excellent', 3000);

    accountingDepartment.addEmployee(zooKeeper);
    accountingDepartment.addAnimal(elephant);
    accountingDepartment.recordExpense(2000);

    accountingDepartment.generateFinancialReport();

    expect(spy).toHaveBeenCalledWith('Financial Report:');
    expect(spy).toHaveBeenCalledWith('-------------------------');
    expect(spy).toHaveBeenCalledWith('Employees:');
    expect(spy).toHaveBeenCalledWith(`${zooKeeper.name} - ${zooKeeper.salary}`);
    expect(spy).toHaveBeenCalledWith('-------------------------');
    expect(spy).toHaveBeenCalledWith('Animals:');
    expect(spy).toHaveBeenCalledWith(`${elephant.name} - ${elephant.expenses}`);
    expect(spy).toHaveBeenCalledWith('-------------------------');
    expect(spy).toHaveBeenCalledWith(`Total Expenses: ${accountingDepartment['expenses']}`);
    expect(spy).toHaveBeenCalledWith('-------------------------');
  });
});
