const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10 )
// const newnum = myNumbers.forEach( (num) => {
//     return (num + 10)
// } )

//console.log(newnum);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);