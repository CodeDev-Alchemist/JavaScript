const twitterUser = new Object() // Singleton Object

const tinderUser = {} // Non-singleton Object

tinderUser.id = "111aa"
tinderUser.name = "Chandu"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "thepradhan4u@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vivek",
            lastname: "Pradhan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);
