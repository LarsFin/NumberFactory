System.out.println("Number Factory \uD83C\uDFED");

def numberFactory = new NumberFactory()
def randomNumA = numberFactory.random()
def randomNumB = numberFactory.random()

println("${randomNumA} + ${randomNumB} = ${numberFactory.add(randomNumA, randomNumB)}")
println("${randomNumA} - ${randomNumB} = ${numberFactory.subtract(randomNumA, randomNumB)}")
println("${randomNumA} * ${randomNumB} = ${numberFactory.multiply(randomNumA, randomNumB)}")
println("${randomNumA} / ${randomNumB} = ${numberFactory.divide(randomNumA, randomNumB)}")

def myNumbers = new int[10]

for (def i = 0; i < 10; i++)
    myNumbers[i] = numberFactory.random()

println("My Numbers: ${myNumbers}")

println("Sum of My Numbers: ${numberFactory.sum(myNumbers)}")
println("\uD83C\uDFED  Number Factory shutting down...")