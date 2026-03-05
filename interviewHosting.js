// Basic Hoisting Check
console.log("Expected output will be undefined", x); // Output: undefined
var x = 5; // var is hoisted and initialized with undefined.
// In the above code, the variable declaration 'var x' is hoisted to the top of its scope, but the assignment 'x = 5' is not.
// Therefore, when we try to log 'x' before the assignment, it outputs 'undefined' instead of throwing an error.

// Function vs Variable Hoisting
console.log("---------------------- Function vs Variable Hoisting ----------------------\n");
foo(); 

var foo = 10;
function foo(){
    console.log("Function");
}

console.log("While memory creation variable and method as been hoisted, but variable is initialized with undefined and method is fully hoisted, so it will log 'Function' instead of throwing an error.\n");

console.log("Variable Overrides Function")

var w = 10;

function w(){
   console.log("hello");
}


console.log("function expression Trap");
try {
fooTrap();
} catch (error) {
    if(error instanceof TypeError) {
        console.log("Function expression is not hoisted: " + error.message);
    }
}
var fooTrap = function(){
   console.log("hello");
};

console.log("---------------------- let Hoisting Trap ----------------------\n");

try {
    console.log(a);
} catch (error) {
    if(error instanceof ReferenceError){
        console.log("ReferenceError: " + error.message);
    }
}
let a = 5; // reference error because 'a' is in temporal dead zone until it is declared and initialized.

console.log("---------------------- TDZ Shadowing Trap ----------------------\n");

var y = 1;

function test(){
    console.log(y); // reference error because 'y' is in temporal dead zone until it is declared and initialized.
    let y = 2;
}

test();

console.log("---------------------- Block Scope Trap ----------------------\n");
let a1 = 10;

{
    try {
   console.log(a1); // reference error because 'a1' is in temporal dead zone until it is declared and initialized.
        
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("ReferenceError: " + error.message);
        }
    }
   let a1 = 20;
}
console.log("---------------------- Function Inside Function ----------------------\n");

function test(){
   console.log(a3);
}

var a3 = 5;

test();

console.log("--------- Nested Hoisting --------- \n");

var a3 = 1;

function outer(){
    console.log(a3);
    var a3 = 2;

    function inner(){
        console.log(a3);
    }
    inner();
}

outer();

// GLOBAL EC
// OUTER METHOD EC

console.log("------- Function Declaration vs Variable -------- \n");
var a4 = 1;

function a4(){
   console.log("hello");
}

console.log(a4);

console.log("--------- typeof Trap --------- \n");
console.log(typeof a5);
var a5 = 10;

console.log(" ---- Function Scope vs Block Scope ---- \n");
var a6 = 10;

{
   var a6 = 20;
}

console.log(a6);

console.log("--- Hoisting in Loops ---- \n");
for(var i=0;i<3;i++){
    console.log(i)
    setTimeout(()=>console.log(i),0);
}
for(let i=0;i<3;i++){
    console.log(i)
    setTimeout(()=>console.log(i),0);
}

console.log("---- Advanced Shadowing ---- \n");
var i1 = 10;

function test(){
    console.log(i1);

    if(true){
        var i1 = 20;
    }
}
console.log("\n")
test();

console.log("---- Interview Killer Question ---- \n");
var x = 1;

function test(){
   console.log(x);
   function x(){}
}

test();