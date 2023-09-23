// Task 1 - Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
interface MyInterface {
  [key: string]: number | string;
}

// Task 2 - Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface MyFunctionInterface {
  [key: string]: (...args: any[]) => any;
}

// Task 3 - Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface MyArrayInterface {
  [index: number]: string;
}

// Task 4 - Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IUser {
  name: string;
  [key: string]: string;
}

// Task 5 - Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface MyBaseInterface {
  [key: string]: number;
}

interface MyExtendedInterface extends MyBaseInterface {
  age: number;
}

// Task 6 - Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
function checkValuesOnNumberType(object: MyInterface): boolean {
  return Object.values(object).every(item => typeof item === 'number');
}
