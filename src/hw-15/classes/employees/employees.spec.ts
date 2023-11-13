import { Employees } from './Employees';
import { Employee } from './Employee';

describe('Employees', () => {
  let employees: Employees;

  beforeEach(() => {
    employees = new Employees();
  });

  test('addEmployee should add an employee to the list and notify observers', () => {
    const spy = jest.spyOn(employees, 'notify');
    const zooKeeper = new Employee('John Doe', 50000, 'Zoo Keeper', ['Taking care of animals', 'Cleaning enclosures']);

    employees.addEmployee(zooKeeper);

    expect(employees.employeesList).toContain(zooKeeper);
    expect(spy).toHaveBeenCalled();
  });

  test('removeEmployee should remove an employee from the list and notify observers', () => {
    const spy = jest.spyOn(employees, 'notify');
    const vet = new Employee('Alice Wonderland', 60000, 'Veterinarian', [
      'Medical care for animals',
      'Health checkups',
    ]);

    employees.addEmployee(vet);
    employees.removeEmployee(vet);

    expect(employees.employeesList).not.toContain(vet);
    expect(spy).toHaveBeenCalled();
  });

  test('removeEmployee should not notify observers if employee is not found', () => {
    const spy = jest.spyOn(employees, 'notify');
    const securityGuard = new Employee('Bob Builder', 70000, 'Security Guard', ['Patrolling', 'Ensuring safety']);

    employees.removeEmployee(securityGuard);

    expect(spy).not.toHaveBeenCalled();
  });
});
