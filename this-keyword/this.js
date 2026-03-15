// this keyword refers to object which is executing the current function. It can be used to access properties and methods of the object.
// Which as four types of binding:
// 1. Default binding: In global scope, this refers to the global object (window in browsers).
// 2. Implicit binding: When a function is called as a method of an object, this refers to the object.
// 3. Explicit binding: Using call(), apply(), or bind() to explicitly set the value of this.
// 4. Arrow functions: Arrow functions do not have their own this; they inherit it from the enclosing scope.

// Example of default binding

"use strict";

function show(){
    console.log(this); // In non-strict mode, this will refer to the global object (window in browsers)
}

show(); // Logs the global object

// Example of implicit binding

const employee = {
    name: "Vishnu Prabhu R",
    greet(){
        console.log("Welcome", this.name)
    }
}
employee.greet();

// Example of explict binding
// Which has three methods: call(), apply, bind()

function address(){
    console.log("Current city", this.city, "pincode:", this.pincode);
}

const person = {city: "Coimbatore", pincode: 641045};

address.call(person); // call() method calls a function with a given this value and arguments provided individually.
address.apply(person); // apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
const boundAddress = address.bind(person); // bind() method creates a new function that, when called, has its this keyword set to the provided value.
boundAddress(); // Logs: Current city Coimbatore pincode: 641045

// New binding method

function user(name){
    this.name = name;
}
const u = new user("Vishnu Prabhu R"); // This will not work as expected because we forgot to use the new keyword. It will set name property on the global object.
console.log(u); // Logs: Vishnu Prabhu R
console.table(u)
