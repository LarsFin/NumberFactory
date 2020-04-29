# Number Factory

Simple number factory written and tested in various languages.

## Languages Covered

The table below shows the languages currently used.

|Language|Tested With|Additional Tools|Complete?|
|:-:|:-:|:-:|:-:|
|C|||NO|
|C#|xUnit|Moq<br>Shouldly|YES|
|C++|Catch2|CMake<br>g++|NO|
|Elixir|||NO|
|go|testing|stretchr/testify/assert<br>golint<br>gomock|YES|
|Groovy|Spock|maven|YES|
|Java|Junit|Mockito<br>gradle|YES|
|Lisp|||NO|
|Node.JS|Jest|npm<br>eslint|YES|
|Objective-C|||NO|
|PHP|PHPUnit|composer|YES|
|Python|unittest|pycodestyle<br>pyrg<br>mock|YES|
|Ruby|rspec|rubocop<br>simplecov|YES|
|Rust|Rust built in 'libtest'|Cargo<br>Clippy<br>mockall|YES|
|Smalltalk|||NO|
|TypeScript|ts-jest|npm<br>eslint (typescript plugin)|YES|

## User Stories of Factory

Simple user stories have been outlined to outline design of project and the tested criteria;

```
As a User,
So I can determine difficult addition,
I can pass two arguments which are added and int result is returned
```

```
As a User,
So I can determine difficult subtraction,
I can pass two arguments which are subtracted and int result is returned
```

```
As a User,
So I can determine difficult multiplication,
I can pass two arguments which are multiplied and int result is returned
```

```
As a User,
So I can determine difficult division,
I can pass two arguments which are divided and float result is returned
```

```
As a User,
So I can determine difficult squares,
I can pass an int argument which is squared and the int result is returned
```

```
As a User,
So I can sum multiple integers,
I can pass an array of integers which is summed and the int result is returned
```

```
As a User,
So I can enjoy RNG,
I can call a function/method to generate a random int from 0 - 100 and return it
```
