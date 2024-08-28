//singleton
//object.create
//Object literals

const mySym = Symbol("key1")

const Juser = {
    name: "Vivek",
    age: 24,
    [mySym]: "myKey1",
    location: "bbsr",
    email: "thepradhan4u@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Saturday"]
}
// console.log(Juser);

// functions are treated as type 1 citizens,i.e. it can be treated as variables.
Juser.greet = function() {
    console.log(`hello user, ${Juser.name}`);
}
console.log(Juser.greet())