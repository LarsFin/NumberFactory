class NumberFactory {

    def randomGenerator

    NumberFactory(randomGenerator = new Random()) {

        this.randomGenerator = randomGenerator
    }

    def static add = { int a, int b -> a + b }

    def static subtract = { int a, int b -> a - b }

    def static multiply = { int a, int b -> a * b }

    def static divide = { int a, int b -> (float)(a / b) }

    def static square = { int n -> n ** 2 }

    def static sum = { int[] arr ->

        def sum = 0

        for (def i : arr)
            sum += i

        return sum
    }

    def static random = {  }
}