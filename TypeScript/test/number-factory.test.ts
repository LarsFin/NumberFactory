import { NumberFactory } from "../src/number-factory";
import { ArgumentError } from "../src/argument-error";

let numberFactory: NumberFactory;

beforeEach(() => {

  numberFactory = new NumberFactory();

});

describe("add tests", () => {

  test("returns correct value", () => {

    const n1 = 5;
    const n2 = 10;
    const expected = 15;

    const result: number = numberFactory.add(n1, n2);

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const n1 = 0.75;
    const n2 = 3.24;

    expect(() => {
        numberFactory.add(n1, n2);
    }).toThrow(ArgumentError);

  });

});

describe("subtraction tests", () => {

  test("returns correct value", () => {

    const n1 = 25;
    const n2 = 10;
    const expected = 15;

    const result: number = numberFactory.subtract(n1, n2);

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const n1 = 8.8;
    const n2 = 5;

    expect(() => {
      numberFactory.subtract(n1, n2);
    }).toThrow(ArgumentError);

  });

});

describe("multiply tests", () => {

  test("returns correct value", () => {

    const n1 = 4;
    const n2 = 4;
    const expected = 16;

    const result: number = numberFactory.multiply(n1, n2);

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const n1 = 10;
    const n2 = 0.8;

    expect(() => {
      numberFactory.multiply(n1, n2);
    }).toThrow(ArgumentError);

  });

});

describe("divide tests", () => {

  test("returns correct value", () => {

    const n1 = 5;
    const n2 = 2;
    const expected = 2.5;

    const result: number = numberFactory.divide(n1, n2);

  });

});
