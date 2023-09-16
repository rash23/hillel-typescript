// Task 1 Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення. Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

type BinaryOperation = (x: number, y: number) => number;

interface ICalculator {
  add: BinaryOperation;
  subtract: BinaryOperation;
  multiply: BinaryOperation;
  divide: BinaryOperation;
}

enum CalculatorTypeEnum {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
}

const calculator: ICalculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero is impossible.');
    }
    return x / y;
  },
};

function calculate(calculator: ICalculator, operation: CalculatorTypeEnum, x: number, y: number): number {
  switch (operation) {
    case CalculatorTypeEnum.ADD:
      return calculator.add(x, y);

    case CalculatorTypeEnum.SUBTRACT:
      return calculator.subtract(x, y);

    case CalculatorTypeEnum.MULTIPLY:
      return calculator.multiply(x, y);

    case CalculatorTypeEnum.DIVIDE:
      return calculator.divide(x, y);

    default:
      throw new Error('Unknown operation');
  }
}

// Example
const ADD = calculate(calculator, CalculatorTypeEnum.ADD, 5, 3);
const SUBTRACT = calculate(calculator, CalculatorTypeEnum.SUBTRACT, 5, 3);
const MULTIPLY = calculate(calculator, CalculatorTypeEnum.MULTIPLY, 5, 3);
const DIVIDE = calculate(calculator, CalculatorTypeEnum.DIVIDE, 5, 3);
// console.log(ADD);
// console.log(SUBTRACT);
// console.log(MULTIPLY);
// console.log(DIVIDE);
