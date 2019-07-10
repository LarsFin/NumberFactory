const NF = require("../lib/number-factory");
const ArgumentError = require("../lib/argument-error.js");

describe("Number Factory tests", () => {

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

});
