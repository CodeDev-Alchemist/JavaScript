//Arrays
//Arrays are treated as objects in javascript

//Shallow copies: Arrays create shallow copy, which means array objects when copied share the same reference point.

const arr = [1,2,3,4,5]
const myArr = new Array(1, 2, 7, 4)

//Array Methods
//length is not a function , so '()' should not be included at last

myArr.push(9)
myArr.push(3)
// myArr.unshift(9)
// myArr.shift() 
// console.log(myArr.indexOf(7)) 
// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

//Slice and Splice

console.log('A', myArr)
const myn = myArr.slice(1, 4)

console.log(myn);
console.log('B', myArr)

const myn1 = myArr.splice(1, 4);
console.log(myn1);
console.log('C', myArr)

//Splicing returns the range of elements from the given array by deleting the elements from the 
//original array and it also adds elements if necessary.
