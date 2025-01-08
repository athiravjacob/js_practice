const str = ["Hello", " ", "world", "!"]

const concatStr = str.reduce((acc, curr) => {
    return acc+curr
}, "")
console.log(concatStr);