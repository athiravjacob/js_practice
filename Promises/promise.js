function getData(input) {
    return new Promise((resolve, reject) => {
        if (input === 'Success') {
            resolve("Data received")
        }else reject("Failed")
    })
}

getData("fail").then((data) => console.log(data))
.catch((err)=>console.log(err))