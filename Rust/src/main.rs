extern crate number_factory;

fn main() {

    let a = number_factory::operations::rnd(number_factory::random::Random {});
    let b = number_factory::operations::rnd(number_factory::random::Random {});

    println!("Number Factory 🏭\n");
    println!("{} + {} = {}", a, b, number_factory::operations::add(a, b));
}

/*
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
*/
