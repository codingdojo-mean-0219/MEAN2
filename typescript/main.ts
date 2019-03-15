const myStr: string = 'some string content';

// myStr = '234';

const array: Array<boolStrNum> = ['dog', 'cat'];


array.push('string');
array.push(234);
// array.push({});
array.push(true);

type boolStrNum = number | boolean | string;

const first = array[0];

function isString(value: any): value is string {
  return typeof value === 'string';
}


if (isString(first)) {
  first.normalize();
}

class Person {
  constructor(public age: number, public name: string) {
  }

  protected sayHello(name): void {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

const person = new Person(45, 'Bob');


class User extends Person {
  constructor(name: string, age: number = 332) {
    super(age, name);
  }
}

const user = new User('Sally');
