/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */

function DeprecatedMethod(reason: string, replacedMethod?: string) {
  return function <T, A extends any[], R>(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: T, ...args: A): R {
      console.log(`Don't use this method because ${reason}${replacedMethod ? ', please use ' + replacedMethod : ''}`);
      return originalMethod.apply(this, args);
    };
  };
}

function MinLength(min: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < min) {
        console.log(`${key} must be at least ${min} characters long.`);
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function MaxLength(max: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > max) {
        console.log(`${key} must be at most ${max} characters long.`);
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function Email(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    return value;
  };

  const setter = function (newVal: string) {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailPattern.test(newVal)) {
      console.log(`Invalid email format for ${key}`);
    } else {
      value = newVal;
    }
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class TestUser {
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @Email
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  setName(name: string) {
    this.name = name;
  }

  @DeprecatedMethod('this method is deprecate', 'setEmail')
  setEmailDeprecated(value: string): void {
    this.email = value;
  }

  setEmail(value: string): void {
    this.email = value;
  }
}

const user = new TestUser('John', 'john.doe@example.com');
console.log(user.name); // "John"
console.log(user.email); // "john.doe@example.com"

// Try to set the 'name' property with an invalid length
user.setName('Jo'); // Will output "name must be at least 3 characters long."

// Try to set the 'name' property with a valid length
user.setName('Jane'); // Sets without errors

// Try to set the 'email' property with an invalid format
user.setEmail('invalid-email'); // Will output "Invalid email format for email."

// Try to set the 'email' property with a valid format
user.setEmail('jane.doe@example.com'); // Sets without errors

// Try to use the deprecated method setEmailDeprecated
user.setEmailDeprecated('invalid-email'); // Will output "Don't use this method because this method is deprecated, use setEmail"
