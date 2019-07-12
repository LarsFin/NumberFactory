#!/bin/bash
printf "\e[94m\e[1m"
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/NumberFactoryTest.php
printf "\e[39m\e[0m"
