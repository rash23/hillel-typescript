// -------------------------------------TASK-1---------------------------------------------
// Фільтрація масиву
//Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
const filterArray = <T>(array: T[], condition: (item: T) => boolean): T[] => {
  return array.filter(item => condition(item));
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = filterArray(numbers, item => item > 5);
//console.log(filteredNumbers);

// -------------------------------------TASK-2---------------------------------------------
// Узагальнений стек
//Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.
class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    const length = this.elements.length;
    if (length === 0) {
      return;
    }
    return this.elements[length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

// console.log(numberStack.peek());
// console.log(numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push('Hello');

// console.log(stringStack.peek());
// console.log(stringStack.pop());

// -------------------------------------TASK-3---------------------------------------------
// Узагальнений словник
//Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта

type DictionaryKey = string | number | symbol;

enum ObjectKeysEnumType {
  STRING = 'string',
  NUMBER = 'number',
  SYMBOL = 'symbol',
}

class Dictionary<T> {
  private data: { [key in DictionaryKey]: T } = {};

  set(key: DictionaryKey, value: T): void {
    const keyType = typeof key;
    if (
      keyType === ObjectKeysEnumType.STRING ||
      keyType === ObjectKeysEnumType.NUMBER ||
      keyType === ObjectKeysEnumType.SYMBOL
    ) {
      this.data[key] = value;
    } else {
      throw new Error('Invalid key type. Key must be a string, number, or symbol.');
    }
  }

  get(key: DictionaryKey): T | undefined {
    return this.data[key];
  }

  has(key: DictionaryKey): boolean {
    return key in this.data;
  }
}

const myDictionary = new Dictionary<number>();
myDictionary.set('one', 1);
myDictionary.set(2, 3.14);

// console.log(myDictionary.get('one'));
// console.log(myDictionary.has('two'));
// console.log(myDictionary.get('three'));
