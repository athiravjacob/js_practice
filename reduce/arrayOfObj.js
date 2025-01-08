const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
  ];

  
const group = users.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] =[]
    }
    acc[curr.age].push(curr.name)
    return acc
}, {})
console.log(group);