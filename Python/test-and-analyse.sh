#!/bin/bash

export PYTHONPATH=$PWD
printf "\n\e[1mAnalysing number_factory.py\n\e[0m"
if [[ $(pycodestyle number_factory/number_factory.py) ]]; then
  printf "\e[33m"
  pycodestyle number_factory/number_factory.py
  printf "\e[0m"
else
  printf "\e[32mNo issues found.\n\e[0m"
fi
printf "\n\e[1mAnalysing test_number_factory.py\n\e[0m"
if [[ $(pycodestyle tests/test_number_factory.py) ]]; then
  printf "\e[33m"
  pycodestyle tests/test_number_factory.py
  printf "\e[0m"
else
  printf "\e[32mNo issues found.\n\e[0m"
fi
printf "\n\e[1mRunning tests\n\e[0m"
pyrg tests/test_number_factory.py
printf "\n\e[1mJob done.\n\n\e[0m"
