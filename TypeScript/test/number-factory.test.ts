import { NumberFactory } from "../src/number-factory";

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

});
