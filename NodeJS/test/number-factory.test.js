const NF = require("../lib/number-factory");

describe("Number Factory tests", () => {

    const intA = 12,
        intB = 10;

    describe("addition tests", () => {

        test("Test add return", () => {

            const actual = NF.addition(intA, intB),
                expected = 22;

            expect(actual).toBe(expected);

        });

    });

});
