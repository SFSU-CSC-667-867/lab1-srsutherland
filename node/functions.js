// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body

const foodo = (y) => y + 1;
console.log(foodo(8))

// make a function that returns a function
const funcFact = () => () => console.log("nested");
funcFact()();
