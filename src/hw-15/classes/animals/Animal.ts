import { IAnimal } from '../../types/animals';

export class Animal implements IAnimal {
  type: string;
  name: string;
  age: number;
  health: string;
  expenses: number;

  constructor(type: string, name: string, age: number, health: string, expenses: number) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.health = health;
    this.expenses = expenses;
  }
}
