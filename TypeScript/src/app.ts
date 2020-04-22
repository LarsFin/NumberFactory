import { NumberFactory } from "./number-factory";

const numberFactory = new NumberFactory();
const intA = numberFactory.random();
const intB = numberFactory.random();
const myNumbers: number[] = [];

console.log("Number Factory 🏭\n");
console.log(`${intA} + ${intB} = ${numberFactory.add(intA, intB)}`);
console.log(`${intA} - ${intB} = ${numberFactory.subtract(intA, intB)}`);
console.log(`${intA} * ${intB} = ${numberFactory.multiply(intA, intB)}`);
console.log(`${intA} / ${intB} = ${numberFactory.divide(intA, intB)}`);
console.log(`${intA} ** 2 = ${numberFactory.square(intA)}`);

while (myNumbers.length < 10) {

  myNumbers.push(numberFactory.random());

}

console.log(`My Numbers: ${myNumbers.join(', ')}`);
console.log(`Sum of My Numbers: ${numberFactory.sum(myNumbers)}`);
console.log("🏭  Number Factory shutting down...");
