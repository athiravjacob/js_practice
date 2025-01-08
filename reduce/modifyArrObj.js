const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
  ];

updated = people.reduce((acc, curr) => {
    acc.push({
        ...curr,
        isAdult :curr.age >=18
    })
    return acc
      
}, [])
  console.log(updated)