const arr = [1, 2, 1, 3, 2, 4, 3, 5]
const removed = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {acc.push(curr)}
    return acc
}, [])
console.log(removed);