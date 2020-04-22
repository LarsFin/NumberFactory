import { ArgumentError } from "./argument-error";

export class NumberFactory {

  add(a: number, b: number): number {
    if (a % 1 != 0 || b % 1 != 0)
      throw new ArgumentError("Arguments must be integers.");

    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

}
