import { IEmployee } from '../../types/employees';

export class Employee implements IEmployee {
  name: string;
  salary: number;
  position: string;
  responsibilities: string[];

  constructor(name: string, salary: number, position: string, responsibilities: string[]) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.responsibilities = responsibilities;
  }
}
