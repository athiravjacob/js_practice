function fetchUser() {
    return new Promise((resolve)=>setTimeout(()=>resolve("user data"),1000))
}

function fetchOrder() {
    let failure = true
    return new Promise((resolve,reject) => {
        if (!failure) {
            setTimeout(() => resolve("order details"), 2000)
}else reject("failed to fetch data")
}
)}

Promise.all([fetchUser(), fetchOrder()])
    .then((results) => console.log("Result", results))
    .catch((Err)=>console.log(Err))
