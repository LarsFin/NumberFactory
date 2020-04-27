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
            def result = numberFactory.multiply(n1, n2)

        then:
            result == 40
    }
}