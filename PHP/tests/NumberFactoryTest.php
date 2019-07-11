<?php
declare(strict_types=1);

include './src/NumberFactory.php';

use PHPUnit\Framework\TestCase;

final class NumberFactoryTest extends TestCase
{
    private $INT_A = 3;
    private $INT_B = 10;

    public function testAddReturn(): void
    {
        $expected = 13;
        $numberFactory = new NumberFactory();
        $this->assertSame(
            $expected,
            $numberFactory->add($this->INT_A, $this->INT_B)
        );
    }
}
?>
