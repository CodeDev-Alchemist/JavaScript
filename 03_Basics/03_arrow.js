const user = {
    username: "Vivek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// to refer to the current context, we use this keyword.

// user.welcomeMessage()
// user.username = "Sanjeet"
// user.welcomeMessage()

// console.log(this);

             //global object in browser is known as window object.


// function chai() {
//     let username = "sam"
//     console.log(this.username);
// }
// chai()

//Note :- we cannot use 'this' keyword in functions, it can be used in objects.

// const chai = function() {
//     let username = "sammy"
//     console.log(this);
    
// }
// chai()

// const chai = () => {
//     let username = "sammy"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 7));

//implicit return :-
// const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "vivek"})
console.log(addTwo(4, 7));
