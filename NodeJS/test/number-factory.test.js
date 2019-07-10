const NF = require("../lib/number-factory");
const ArgumentError = require("../lib/argument-error.js");

const float = 3.5,
    intA = 12,
    intB = 10,
    numberFactory = new NF();

describe("addition tests", () => {

    test("Test addition return", () => {

        const actual = numberFactory.addition(intA, intB),
            expected = 22;

        expect(actual).toBe(expected);

    });

    test("Test addition arguments", () => {

        expect(() => {

            numberFactory.addition(intA, float);

        }).toThrow(ArgumentError);

    });

});

describe("subtract tests", () => {

    test("Test subtract return", () => {

        const actual = numberFactory.subtract(intA, intB),
            expected = 2;

        expect(actual).toBe(expected);

    });

    test("Test subtract arguments", () => {

        expect(() => {

            numberFactory.subtract(intA, float);

        }).toThrow(ArgumentError);

    });

});

describe("multiply tests", () => {

    test("Test multiply return", () => {

        const actual = numberFactory.multiply(intA, intB),
            expected = 120;

        expect(actual).toBe(expected);

    });

    test("Test multiply arguments", () => {

        expect(() => {

            numberFactory.multiply(intA, float);

        }).toThrow(ArgumentError);

    });

});

describe("divide tests", () => {

    test("Test divide return", () => {

        const actual = numberFactory.divide(intA, intB),
            expected = 1.2;

        expect(actual).toBe(expected);

    });

});
