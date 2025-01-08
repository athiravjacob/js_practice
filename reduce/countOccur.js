const fruits = ["apple", "banana", "orange", "apple", "banana", "banana"];

const occurance = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
console.log(occurance);