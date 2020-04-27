class NumberFactory {

    def static add = { int a, int b -> a + b }

    def static subtract = { int a, int b -> a - b }

    def static multiply = { int a, int b -> a * b }

    def static divide = { int a, int b -> (float)(a / b) }

    def static square = { int n -> n ** 2 }
}