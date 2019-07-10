const NF = require("../lib/number-factory");
const ArgumentError = require("../lib/argument-error.js");

describe("Number Factory tests", () => {

    const float = 3.5,
        intA = 12,
        intB = 10;

    describe("addition tests", () => {

        test("Test add return", () => {

            const actual = NF.addition(intA, intB),
                expected = 22;

            expect(actual).toBe(expected);

        });

        test("Test add arguments", () => {

            expect(() => {

                NF.addition(intA, float);

            }).toThrow(ArgumentError);

        });

    });

});
