import { ArgumentError } from "./argument-error";

export class NumberFactory {

  add(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a + b;
  }

  subtract(a: number, b: number): number {
    this.validateIntegers(a, b);

    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  private validateIntegers(...args: number[]) {
    for (const arg of args)
      if (arg % 1 != 0)
        throw new ArgumentError("Arguments must be integers");
  }

}
