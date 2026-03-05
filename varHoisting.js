// Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope 
// during the memory creation phase of the execution context.

console.log(x); // Output: 5
var x = 5;
// In the above code, the variable declaration 'var x' is hoisted to the top of its scope, but the assignment 'x = 5' is not.
// Therefore, when we try to log 'x' before the assignment, it outputs 'undefined' instead of throwing an error.

greetFn(); // Output: "Hello!"
function greetFn() {
    console.log("Hello!");
}
// In the above code, the function declaration 'function greetFn()' is hoisted to the top of its scope with full definition, 
// allowing us to call it before its actual declaration in the code.

// However, if we use a function expression instead of a function declaration, it will not be hoisted:
try {
    greetFnExp(); // Output: TypeError: greetFnExp is not a function
} catch (error) {
    if(error instanceof TypeError) {
        console.error("Function expression is not hoisted: " + error.message);
    }
}
var greetFnExp = function() {
    console.log("Function Expression Hello!");
};
console.log("greetArrow", greetArrow)
console.log("- Because greetArrow is declared with var, it is hoisted but initialized with undefined, so it will log undefined before the assignment.\n");
// arrow function expressions are also not hoisted:
try {
    greetArrow(); // Output: TypeError: greetArrow is not a function
} catch (error) {
    if(error instanceof TypeError) {
        console.error("Arrow function is not hoisted: " + error.message);
    }
}
var greetArrow = () => {
    console.log("Arrow Function Hello!");
};

console.log("-------- Temporal Dead Zone TDZ -------- \n");

try {
    console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
} catch (error) {
    if(error instanceof ReferenceError) {
        console.error("Temporal Dead Zone (TDZ) error: " + error.message);
    }
}
let y = 10;
try {
    console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
} catch (error) {
    if(error instanceof ReferenceError) {
        console.error("Temporal Dead Zone (TDZ) error: " + error.message);
    }
}
const z = 20;
// In the above code, the variable 'y' is declared with 'let', which is not hoisted in the same way as 'var'. 
// It is in a "temporal dead zone" (TDZ) from the start of the block until the declaration is processed, 
// so trying to access it before the declaration results in a ReferenceError.

console.log("-------- Hoisting Inside Functions -------- \n");

var a = 1;
function test(){
    console.log(a);
    var a = 2;
}
test(); // Output: undefined
// In the above code, the variable 'a' inside the function 'test' is hoisted to the top of the function scope, 
// but it is initialized with 'undefined' until the assignment 'a = 2' is executed. 
// Therefore, when we log 'a' inside the function before the assignment, it outputs 'undefined'.

// Function vs Variable Hoisting

var foo = 10;
function foo() {
    console.log("Function foo");
}
foo()
console.log(foo)
