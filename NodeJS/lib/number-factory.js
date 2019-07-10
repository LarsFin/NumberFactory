const ArgumentError = require("./argument-error.js");

class NumberFactory {

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

    _validateInt (arg) {

        const bottom = 0,
            top = 1;

        if (typeof arg !== "number" || arg % top !== bottom) {

            throw new ArgumentError(`Argument: ${arg} not an integer.`);

        }

    }

}

module.exports = NumberFactory;
