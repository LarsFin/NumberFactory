import { NumberFactory } from "../src/number-factory";
import { ArgumentError } from "../src/argument-error";

let numberFactory: NumberFactory;

beforeEach(() => {

  numberFactory = new NumberFactory();

});

describe("addition tests", () => {

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

});
