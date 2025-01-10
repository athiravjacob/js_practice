const cart = [
    { price: 100, quantity: 2 },
    { price: 200, quantity: 1 },
    { price: 50, quantity: 4 }
  ];
  const discount = 0.1;  // 10% discount
  
const total = cart.reduce((acc, curr) => {
    acc += curr.price * curr.quantity
      return acc
}, 0)
  console.log(total-(total*discount))