function processNumber(num) {
    return new Promise((resolve) => resolve(num))
        .then((data) => data * 2)
        .then((data) => data + 10)
        .then((data)=>console.log("processed Num =" ,data))
    
}

processNumber(10)
