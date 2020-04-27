import spock.lang.Specification

class NumberFactorySpec extends Specification {

    def numberFactory

    //#############//
    // Add Feature //
    //#############//

    def "Adds two passed integers"() {

        given:
            numberFactory = new NumberFactory()
            def n1 = 5
            def n2 = 10

        when:
            def sum = numberFactory.add(n1, n2)

        then:
            sum == 15
    }

    //##################//
    // Subtract Feature //
    //##################//

    def "Subtracts two passed integers"() {

        given:
            numberFactory = new NumberFactory()
            def n1 = 20
            def n2 = 8

        when:
            def result = numberFactory.subtract(n1, n2)

        then:
            result == 12
    }

    //##################//
    // Multiply Feature //
    //##################//

    def "Multiply two passed integers"() {

        given:
            numberFactory = new NumberFactory()
            def n1 = 5
            def n2 = 8

        when:
            def product = numberFactory.multiply(n1, n2)

        then:
            product == 40
    }

    //################//
    // Divide Feature //
    //################//

    def "Divide two passed integers for float return"() {

        given:
            numberFactory = new NumberFactory()
            def n1 = 12
            def n2 = 5

        when:
            def result = numberFactory.divide(n1, n2)

        then:
            result == 2.4f
    }

    //################//
    // Square Feature //
    //################//

    def "Squares a passed integer"() {

        given:
            numberFactory = new NumberFactory()
            def n = 4

        when:
            def square = numberFactory.square(n)

        then:
            square == 16
    }

    //#############//
    // Sum Feature //
    //#############//

    def "Sums an array of integers"() {

        given:
            numberFactory = new NumberFactory()
            def ints = (int[])[ 4, 6, 8, 12 ]

        when:
            def sum = numberFactory.sum(ints)

        then:
            sum == 30
    }

    //################//
    // Random Feature //
    //################//

    def "Generates random number from 1 to 100"() {

        given:
            def mockRandomGenerator = Mock(IRandom)
            mockRandomGenerator.generate() >> 0.4
            numberFactory = new NumberFactory(mockRandomGenerator)

        when:
            def generated = numberFactory.random()

        then:
            generated == 40
            1 * mockRandomGenerator.generate()
    }
}