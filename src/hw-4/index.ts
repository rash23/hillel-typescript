// TASK 1 - Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Example
// const someValue = 'Hello, world!';
// if (isString(someValue)) {
//   console.log('this is string:', someValue);
// } else {
//   console.log('this is not string:', someValue);
// }

// TASK 2 - У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. Використовуйте захисника типу для цього завдання.
function filterStrings(arr: unknown[]): string[] {
  return arr.filter(isString);
}

// Example
// const mixedArray: (string | number)[] = ['apple', 42, 'banana', 123, 'cherry'];
// const filteredArray = filterStrings(mixedArray);
// console.log(filteredArray); // ["apple", "banana", "cherry"]

// TASK 3 - У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.
function getValueByKey(obj: object): string | void {
  const values = Object.values(obj);

  if (!values.length) {
    return;
  }

  const stringValue = values.find(isString);

  return stringValue ?? undefined;
}

// Example
type myObjectType = {
  name: string;
  age: number;
};
const myObject: myObjectType = {
  name: 'John',
  age: 30,
};

// console.log(getValueByKey(myObject));

// TASK 4 - Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
function hasIdProperty(obj: object): obj is { id: number } {
  return 'id' in obj && typeof obj.id === 'number';
}

function hasNameProperty(obj: object): obj is { name: string } {
  return 'name' in obj && typeof obj.name === 'string';
}

function processObject(obj: object): string {
  if (hasIdProperty(obj)) {
    return `Object has property - id: ${obj.id}`;
  } else if (hasNameProperty(obj)) {
    return `Object don't have property - name: ${obj.name}`;
  } else {
    return 'The object does not contain the properties you are looking for';
  }
}

// Example

// const objectWithId = { id: 1, name: 'John' };
// const objectWithName = { name: 'Alice' };
// const objectWithoutKnownProperties = { age: 30 };

// console.log(processObject(objectWithId));
// console.log(processObject(objectWithName));
// console.log(processObject(objectWithoutKnownProperties));

// TASK 5 - У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.
function processVariable(value: string | number): void {
  if (typeof value === 'string') {
    value.toUpperCase();
  } else if (typeof value === 'number') {
    value.toFixed(1);
  } else {
    // console.log('Unknown type of value');
  }
}

// Example
// processVariable('Привіт');
// processVariable(42);
// processVariable(true);

// TASK 6 - Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.
function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function';
}

function callIfFunction(func: unknown, ...args: any[]): any {
  if (isFunction(func)) {
    return func(...args);
  }
  return;
}

// TASK 7  - Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): string {
    return `${this.name} barks`;
  }
}

class Cat extends Animal {
  meow(): string {
    return `${this.name} meows`;
  }
}
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

const dog = new Dog('Rex');
const cat = new Cat('Murka');

function printAnimalSound(animal: Animal): string {
  if (isDog(animal)) {
    return animal.bark();
  } else if (isCat(animal)) {
    return animal.meow();
  } else {
    return 'Unknown animal';
  }
}

// console.log(printAnimalSound(dog));
// console.log(printAnimalSound(cat));
