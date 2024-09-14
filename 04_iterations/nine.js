const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function(acc, currval) {
//     console.log(`acc : ${acc}, currval : ${currval}`);
    
//     return acc + currval
// }, 0 )

const myTotal = myNum.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval
}, 5 )
console.log(myTotal);

const shoppingCart = [
    {
        courseName: "JS",
        price: 1499
    },
    {
        courseName: "java",
        price: 3809
    },
    {
        courseName: "pythom",
        price: 499
    },
    {
        courseName: "mobile dev",
        price: 14999
    },
    {
        courseName: "dsa",
        price: 6999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) =>  acc + item.price, 0)
console.log(priceToPay);
