// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice
const c = console.log
// use forEach
const aTest = [4,2,0]
c(aTest)
aTest.forEach((n) => c(n));

// use map
aTest.map((n) => n * 10)

// use pop
aTest.pop()
c(aTest)

// use push
aTest.push(69)
c(aTest)

// use shift
aTest.shift()
c(aTest)

// use unshift
aTest.unshift(420)
c(aTest)

// use filter
c(aTest.filter((n) => n == 2))