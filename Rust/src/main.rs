use number_factory::operations as nf;
use number_factory::random as r;

fn main() {

    let a = nf::rnd(r::Random {});
    let b = nf::rnd(r::Random {});

    println!("Number Factory 🏭\n");
    println!("{} + {} = {}", a, b, nf::add(a, b));
    println!("{} - {} = {}", a, b, nf::sub(a, b));
    println!("{} * {} = {}", a, b, nf::mult(a, b));
    println!("{} / {} = {}", a, b, nf::div(a, b));
    println!("{} ** 2 = {}", a, nf::sqr(a));

    let mut numbers: [i32; 10] = [0; 10];

    print!("My Numbers: ");
    let mut tmp;

    for n in numbers.iter_mut() {

        tmp = nf::rnd(r::Random {});

        print!("{} ", tmp);

        *n = tmp;
    }

    println!();

    println!("Sum of My Numbers: {}", nf::sum(&numbers));
    println!("🏭  Number Factory shutting down...");
}
