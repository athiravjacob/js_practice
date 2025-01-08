function* generatorFibinocci() {
    let [prev, curr] = [0, 1]
    while (true) {
        yield curr;
        [prev,curr] =[curr, prev+curr]
    }
}

const fib = generatorFibinocci()
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)