const NF = require("./lib/number-factory.js");

const numberFactory = new NF(),
    intA = numberFactory.random(),
    intB = numberFactory.random(),
    myNumbers = [];

console.log("Number Factory 🏭");
console.log(`${intA} + ${intB} = ${numberFactory.addition(intA, intB)}`);
console.log(`${intA} - ${intB} = ${numberFactory.subtract(intA, intB)}`);
console.log(`${intA} * ${intB} = ${numberFactory.multiply(intA, intB)}`);
console.log(`${intA} / ${intB} = ${numberFactory.divide(intA, intB)}`);
console.log(`${intA} ** 2 = ${numberFactory.square(intA)}`);

while (myNumbers.length < 10) {

    myNumbers.push(numberFactory.random());

}

console.log(`My Numers: ${myNumbers.join(', ')}`)
console.log(`Sum of My Numbers: ${numberFactory.sum(myNumbers)}`)
console.log("🏭  Number Factory shutting down...");
