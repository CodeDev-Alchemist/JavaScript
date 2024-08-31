//iife:- Immediately invoked Function Expressions

//some times, problems occur due to global scope pollution, for example variable declarations, types, etc,
// so.., in order to prevent the function from the ambiguity of global scopes, iife is used.

(function chai() {
    //named iife.
    console.log("Database connected");
})();

//the  `iife` function doesn't know where to stop the context, so in order to run multiple iife functions ,
// we need to stop each iife function with a semi-colon at the end of each iife function.

( () => {
    console.log("db connected");
    
} )();
( (name) => {
    console.log(`db connected, ${name}`);
} )("Vivek");