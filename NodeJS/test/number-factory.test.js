const NF = require("../lib/number-factory");

describe("Number Factory tests", () => {

    const intA = 12,
        intB = 10,
        numberFactory = new NF();

    describe("addition tests", () => {

        test("Test add return", () => {

            const actual = numberFactory.addition(intA, intB),
                expected = 22;

            expect(actual).toBe(expected);

        });

    });

});
