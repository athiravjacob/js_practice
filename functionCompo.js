// Function Composition: Combining two or more functions to create a new function, where the output of one function is passed as the input to another.

const toUpper = (x) => x.toUpperCase()
const addExclamation = (x) => x + "!"

const compose = (f, g) => x => f(g(x))

const uppercaseExclamation = compose(toUpper, addExclamation)
console.log(uppercaseExclamation("hello"));