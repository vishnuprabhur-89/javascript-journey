console.log("Promise concept in JavaScript");

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner. A Promise can be in one of three states: pending, fulfilled, or rejected.
const user = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Vishnu Prabhu R");
    }, 1000)
})
console.log(user); // Logs: Promise { 'Vishnu Prabhu R' }   
user.then((name) => {
    console.log(name); // Logs: Vishnu Prabhu R
})

console.log("\n Promise Execution Example")

console.log("Example one: Promise executes immediately when it is created, even before the then() method is called.");

console.log("Start");
const promise = new Promise((resolve, reject) => {
    console.log("Promise executing...")
})
console.log("End")

console.log("\n Example two: promoise will get execute after the call stack is empty, then micro task queue will get executed and then the promise will get resolved.");

console.log("Start");
const promise2 = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully \n");
})
promise2.then((message) => {
    console.log(message); // Logs: Promise resolved successfully
})
console.log("End")  

console.log("\n Example 3: promise chaining: You can chain multiple then() methods to handle a sequence of asynchronous operations. Each then() method returns a new Promise, allowing you to perform additional operations on the resolved value.");

const promise3 = new Promise((resolve, reject)=> {
    resolve(1000)
})

promise3.then((value) => value * 10) // Logs: 1000
promise3.then((value) => console.log("value 1" , value * 1 )) // Logs: 1000
promise3.then((value) => value * 100) // Logs: 1000
promise3.then((value) => console.log("value 2" , value * 2)) // Logs: 1000

console.log("\n Error Propagation: If any error occurs in the promise chain, it will be propagated down the chain until it is caught by a catch() method. This allows you to handle errors in a centralized manner.");

const promise4 = new Promise((resolve, rejected) => {
    resolve("Promise resolved successfully");
})

promise4.then((message) => {
    throw new Error("Something went wrong!"); // This will throw an error and it will be caught by the catch() method.
})
.then((message) => {
    console.log(message); // This will not be executed because the previous then() method threw an error.
})
.catch((error) => {
    console.error("Error:", error.message); // Logs: Error: Something went wrong!
})  