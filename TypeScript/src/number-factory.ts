import { ArgumentError } from "./argument-error";
import { IRandom } from "./random";
import { Random } from "./random";

export class NumberFactory {

  private randomGenerator: IRandom;

  constructor(randomGenerator: IRandom = new Random()) {
    this.randomGenerator = randomGenerator;
  }

  add(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a + b;
  }

  subtract(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a - b;
  }

  multiply(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a * b;
  }

  divide(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a / b;
  }

  square(n: number): number {
    this.validateIntegers(n);

    return n ** 2;
  }

  sum(numbers: number[]): number {
    this.validateIntegers(...numbers);

    let sum = 0;

    for (const n of numbers)
      sum += n;

    return sum;
  }

  random() {
    let randomVariant = this.randomGenerator.generate();

    return Math.floor(randomVariant * 101);
  }

  private validateIntegers(...args: number[]): void {
    for (const arg of args)
      if (arg % 1 != 0)
        throw new ArgumentError("Arguments must be integers");
  }

}
