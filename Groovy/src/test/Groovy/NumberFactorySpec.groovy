import spock.lang.Specification

class NumberFactorySpec extends Specification {

    def numberFactory

    //#############//
    // Add Feature //
    //#############//

    def "Adds two passed arguments"() {
        given:
            numberFactory = new NumberFactory()
            def n1 = 5
            def n2 = 10

        when:
            def sum = numberFactory.add(n1, n2)

        then:
            sum == 15
    }

    def "Throws IllegalArgumentException when passed arguments are not integers"() {
        given:
            numberFactory = new NumberFactory()
            def n1 = 5
            def n2 = 4.54

        when:
            numberFactory.add(n1, n2)

        then:
            thrown(IllegalArgumentException)
    }

}