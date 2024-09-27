const promiseOne = new Promise(function(resolve, reject) {
    //do an async task
    //db calls
    setTimeout(function() {
        console.log("Async task is complete.");
        resolve()
    },1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function() {
    console.log("2nd promise consumed.")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log(" Async task no. 3")
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error ) { 
            resolve({username: "vivek", password: "111"})
        } else {
            reject('ERROR: cannot be resolved')
        }
    }, 1000);
})
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


