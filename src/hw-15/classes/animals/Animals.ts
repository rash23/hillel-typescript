import { Observable } from '../observable/Observable';
import { Animal } from './Animal';

export class Animals extends Observable {
  private _animals: Animal[] = [];

  public get animalsList(): Animal[] {
    return this._animals;
  }

  public addAnimal(animal: Animal): void {
    this._animals.push(animal);
    this.notify();
  }
}
