const numbers = [12, 9, 34, 5, 2]
const largest = numbers.reduce((max, curr) => {
    if (curr > max) max = curr
    return max
}, numbers[0])
console.log(largest)