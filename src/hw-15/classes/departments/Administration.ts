import { Observable } from '../observable/Observable';
import { Employee } from '../employees/Employee';
import { Employees } from '../employees/Employees';

export class Administration extends Observable {
  private _employees: Employees = new Employees();
  private notifications: string[] = [];

  public get employees(): Employee[] {
    return this._employees.employeesList;
  }

  public addEmployee(employee: Employee): void {
    this._employees.addClient(employee);
  }

  public removeEmployee(employee: Employee): void {
    this._employees.removeEmployee(employee);
  }

  public createNotification(notification: string): void {
    this.notifications.push(notification);
    console.log(`Notification created: ${notification}`);
    this.notify();
  }

  public getNotifications(): string[] {
    return this.notifications;
  }
}
