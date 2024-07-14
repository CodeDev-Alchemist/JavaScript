function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('Vivek'));

function newArray(getArray) {
    return getArray[2]
};
arr = [30, 400, 18, 34]
console.log(newArray(arr));

myObject = {
    name : 'Vivek Pradhan ',
    courses : 'JavaScript Challenges'
};

// function handleObject(anyObject) {
//     console.log(`my name is ${anyObject.username} and i am practicing ${anyObject.courses}`);
// }; This will show : 'My name is undefined and i am practicing Javascript Challlenges' : Because it didn't get the proper name
function handleObject(anyObject) {
    console.log(`my name is ${anyObject.name} and i am practicing ${anyObject.courses}`);
};
handleObject(myObject);