const NF = require("../lib/number-factory");
const ArgumentError = require("../lib/argument-error.js");

const float = 3.5,
    intA = 12,
    intB = 10,
    intC = 33,
    intD = 45,
    integers = [
        intA,
        intB,
        intC,
        intD
    ],
    mixedArr = [
        intA,
        intB,
        float,
        intD
    ],
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

    test("Test divide arguments", () => {

        expect(() => {

            numberFactory.divide(intA, float);

        }).toThrow(ArgumentError);

    });

});

describe("square tests", () => {

    test("Test square return", () => {

        const actual = numberFactory.square(intA),
            expected = 144;

        expect(actual).toBe(expected);

    });

    test("Test square argument", () => {

        expect(() => {

            numberFactory.square(float);

        }).toThrow(ArgumentError);

    });

});

describe("sum tests", () => {

    test("Test sum return", () => {

        const actual = numberFactory.sum(integers),
            expected = 100;

        expect(actual).toBe(expected);

    });

    test("Test sum argument", () => {

        expect(() => {

            numberFactory.sum(mixedArr);

        }).toThrow(ArgumentError);

    });

});

describe("random tests", () => {

    const force = 0.999,
        mockRandomCall = jest.fn(() => force),
        diNumberFactory = new NF(mockRandomCall);

    test("Test Math.random() called", () => {

        const expected = 1;

        diNumberFactory.random();
        expect(mockRandomCall.mock.calls).toHaveLength(expected);

    });

    test("Test random return", () => {

        const expected = 100;

        expect(diNumberFactory.random()).toBe(expected);

    });

});
