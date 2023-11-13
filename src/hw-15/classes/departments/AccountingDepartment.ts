import { Employee } from '../employees/Employee';
import { Animals } from '../animals/Animals';
import { Animal } from '../animals/Animal';
import { Employees } from '../employees/Employees';

export class AccountingDepartment {
  private employees: Employees = new Employees();
  private animals: Animals = new Animals();
  private expenses: number = 0;

  public addEmployee(employee: Employee): void {
    this.employees.addEmployee(employee);
  }

  public addAnimal(animal: Animal): void {
    this.animals.addAnimal(animal);
  }

  public recordExpense(amount: number): void {
    this.expenses += amount;
  }

  public generateFinancialReport(): void {
    console.log('Financial Report:');
    console.log('-------------------------');
    console.log('Employees:');
    this.employees.employeesList.forEach(employee => {
      console.log(`${employee.name} - ${employee.salary}`);
    });
    console.log('-------------------------');
    console.log('Animals:');
    this.animals.animalsList.forEach(animal => {
      console.log(`${animal.name} - ${animal.expenses}`);
    });
    console.log('-------------------------');
    console.log(`Total Expenses: ${this.expenses}`);
    console.log('-------------------------');
  }
}
