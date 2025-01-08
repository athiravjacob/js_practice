const add5 = (x) => x + 5 
const multiply = (x) => x * 2

const compose = (f, g) => x => f(g(x))
const multiplyandadd = compose(multiply, add5)
console.log(multiplyandadd(10))