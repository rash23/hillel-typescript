//********************************Task-1********************************
// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. Як параметр типу повинен обов'язково виступати функціональний тип.

type ReturnTypeBasedOnFunction<T> = T extends (...args: Array<infer U>) => infer U ? U : never;

function exampleFunction1(): number {
  return 42;
}

function exampleFunction2(): string {
  return 'Hello, TypeScript!';
}

type ResultType1 = ReturnTypeBasedOnFunction<typeof exampleFunction1>; // number
type ResultType2 = ReturnTypeBasedOnFunction<typeof exampleFunction2>; // string

//********************************Task-2********************************
//Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру
type ExtractFunctionTypes<T> = T extends (arg: infer U) => infer V ? [V, U] : never;

function exampleFunction(input: string): number {
  return input.length;
}

type ExtractedTypes = ExtractFunctionTypes<typeof exampleFunction>;
