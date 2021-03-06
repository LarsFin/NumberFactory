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

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const n1 = 10;
    const n2 = 0.8;

    expect(() => {
      numberFactory.divide(n1, n2);
    }).toThrow(ArgumentError);

  });

});

describe("square tests", () => {

  test("returns correct value", () => {

    const n = 8;
    const expected = 64;

    const result: number = numberFactory.square(n);

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const n = 0.25;

    expect(() => {
      numberFactory.square(n);
    }).toThrow(ArgumentError);

  });

});

describe("sum tests", () => {

  test("returns correct value", () => {

    const numbers = [2, 5, 13];
    const expected = 20;

    const result: number = numberFactory.sum(numbers);

    expect(result).toBe(expected);

  });

  test("throws ArgumentError when passed non integers", () => {

    const numbers = [1, 4, 8, 20, 25.34, 30, 50];

    expect(() => {
      numberFactory.sum(numbers);
    }).toThrow(ArgumentError);

  });

});

describe("random tests", () => {

  test("calls random generator and returns floored value", () => {

    const randomStub = 0.5;
    const mockRandom = {
      generate: jest.fn(() => randomStub)
    };
    const expected = 50;

    numberFactory = new NumberFactory(mockRandom);

    const result = numberFactory.random();

    expect(result).toBe(expected);

  });

});
