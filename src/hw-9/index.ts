//******************* TASK 1 *******************

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface IObject1 {
  a: number;
  b: {
    c: string;
    d: {
      e: boolean;
    };
  };
}

const myObject1: DeepReadonly<IObject1> = {
  a: 1,
  b: {
    c: 'Hello',
    d: {
      e: true,
    },
  },
};

// myObject1.a = 2;
// myObject1.b.c = 'World';
// myObject1.b.d.e = false;

//******************* TASK 2 *******************

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

type IObject2 = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

const myData: IObject2 = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Exampleville',
  },
};

type ReadonlyMyData = DeepRequireReadonly<IObject2>;

// const readonlyData: ReadonlyMyData = myData;
// readonlyData.name = 'Alice';
// readonlyData.address.street = '456 Elm St';

//******************* TASK 3 *******************

type UpperCaseKeys<T extends object> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type OriginalObject = {
  name: string;
  age: number;
  city: string;
};

type UppercaseKeysObject = UpperCaseKeys<OriginalObject>;

//******************* TASK 4 *******************

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

const obj = {
  name: 'John',
  age: 30,
};

// const descriptors: ObjectToPropertyDescriptor<typeof obj> = {
//   name: { value: 'John', writable: true, enumerable: true, configurable: true },
//   age: { value: 30, writable: true, enumerable: true, configurable: true },
// };
