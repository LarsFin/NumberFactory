const ArgumentError = require("./argument-error.js");

class NumberFactory {

    constructor (rfunc = Math.random) {

        this.rfunc = rfunc;

    }

    addition (intA, intB) {

        this._validateInt(intA);
        this._validateInt(intB);

        return intA + intB;

    }

    subtract (intA, intB) {

        this._validateInt(intA);
        this._validateInt(intB);

        return intA - intB;

    }

    multiply (intA, intB) {

        this._validateInt(intA);
        this._validateInt(intB);

        return intA * intB;

    }

    divide (intA, intB) {

        this._validateInt(intA);
        this._validateInt(intB);

        return intA / intB;

    }

    square (intA) {

        this._validateInt(intA);
        const powerFactor = 2;

        return intA ** powerFactor;

    }

    sum (integers) {

        let sum = 0;

        integers.forEach((num) => {

            this._validateInt(num);
            sum += num;

        });

        return sum;

    }

    random () {

        this.rfunc();

    }

    _validateInt (arg) {

        const bottom = 0,
            top = 1;

        if (typeof arg !== "number" || arg % top !== bottom) {

            throw new ArgumentError(`Argument: ${arg} not an integer.`);

        }

    }

}

module.exports = NumberFactory;
