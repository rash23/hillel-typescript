import { Observable } from '../observable/Observable';
import { Employee } from './Employee';

export class Employees extends Observable {
  private _employees: Employee[] = [];

  public get employeesList(): Employee[] {
    return this._employees;
  }

  public addClient(employee: Employee): void {
    this._employees.push(employee);
    this.notify();
  }

  public removeEmployee(employee: Employee): void {
    const index = this._employees.indexOf(employee);
    if (index !== -1) {
      this._employees.splice(index, 1);
      this.notify();
    }
  }
}
