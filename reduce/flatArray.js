const deeplyNested = [1, [2, 3], [3, [4, [5]]]]
const nest =[1,[2,3],[4,5]]
const flattened = nest.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ?item:[item])
}, [])

console.log(flattened)

const flatDeep = (array) => {
    return array.reduce((acc, item) => {
        return acc.concat(Array.isArray(item)? flatDeep(item) :item)
    },[])
}
console.log(flatDeep(deeplyNested))