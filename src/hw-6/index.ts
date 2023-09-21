// Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

abstract class Shape {
  constructor(
    public readonly name: string,
    public readonly color: string
  ) {}

  abstract calculateArea(): number;
}

class Circle extends Shape {
  readonly radius: number;
  constructor(radius: number, color: string) {
    super('Circle', color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(
    public readonly width: number,
    public readonly height: number,
    color: string
  ) {
    super('Rectangle', color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): string {
    return `Area of ${this.color} ${this.name}: ${this.width} * ${this.height}`;
  }
}

class Square extends Rectangle {
  constructor(sideLength: number, color: string) {
    super(sideLength, sideLength, color);
  }

  print(): string {
    return `Area of ${this.color} ${this.name}: ${this.width} * ${this.height}`;
  }
}

class Triangle extends Shape {
  constructor(
    public readonly base: number,
    public readonly height: number,
    color: string
  ) {
    super('Triangle', color);
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5, 'red');
// console.log(`Area of ${circle.color} ${circle.name}: ${circle.calculateArea()}`);

const rectangle = new Rectangle(4, 6, 'blue');
// console.log(`Area of ${rectangle.color} ${rectangle.name}: ${rectangle.calculateArea()}`);
rectangle.print();

const square = new Square(5, 'green');
// console.log(`Area of ${square.color} ${square.name}: ${square.calculateArea()}`);
square.print();

const triangle = new Triangle(4, 3, 'yellow');
// console.log(`Area of ${triangle.color} ${triangle.name}: ${triangle.calculateArea()}`);
