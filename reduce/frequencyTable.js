const nums = [0, 0, 0, 3, 1, 1, 3, 1, 3, 1, 2]

const freq = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr ]|| 0) + 1
    return acc
}, {})
console.log(freq)