console.log("Interview questions on Promise concept in JavaScript");
console.log("Basic Example of promise")
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Output will be: A D C B
// Explanation: The synchronous code (A and D) executes first, then the microtask queue (C) is processed, and finally the macrotask queue (B) is processed.

console.log("\n Promise vs setTimeout")

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// output: Start, End, Promise, Timeout
// Explanation: The synchronous code (Start and End) executes first, then the microtask queue (Promise) is processed, and finally the macrotask queue (Timeout) is processed.

console.log("\n Multiple .then() calls on the same promise")

const p = Promise.resolve("Hello");

p.then(res => console.log(res));
p.then(res => console.log(res));
p.then(res => console.log(res));

// output: Hello, Hello, Hello

console.log("\n Chaining vs Multiple .then()")
Promise.resolve(1)
.then(x => x + 1)
.then(x => x + 1)
.then(x => console.log(x));
// output: 3

console.log("\n Returning Promise inside .then()")
Promise.resolve(10)
.then(num => {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 2), 1000);
    });
})
.then(result => console.log(result));
// output: 20 (after 1 second)

console.log("\n Missing Return (Very Tricky)")
Promise.resolve(5)
.then(num => {
    num * 2;
})
.then(result => console.log(result));
// output: undefined
// Explanation: The first .then() does not return anything, so the next .then() receives undefined.

console.log("\n Nested Promise Trick")
Promise.resolve()
.then(() => {
    return Promise.resolve("Inner Promise");
})
.then(res => console.log(res));
// output: Inner Promise

console.log("\Ultimate Interview Question")
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
.then(() => console.log("3"))
.then(() => console.log("4"));

console.log("5");
// output: 1,5,3,4,2

console.log("\n Hard Interview Question")
Promise.resolve(1)
.then(x => {
    console.log(x);
    return x + 1;
})
.then(x => {
    console.log(x);
    throw new Error("Error");
})
.catch(() => {
    console.log("Caught");
    return 10;
})
.then(x => {
    console.log(x);
});
//output: 
// 1
// 2
// Caught
// 10
console.log("\n FAANG Level Question")
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve()
.then(() => {
    console.log("Promise 1");
})
.then(() => {
    console.log("Promise 2");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");
// output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

console.log("\n One Extreme FAANG Question")
Promise.resolve()
.then(() => {
    console.log("A");
})
.then(() => {
    setTimeout(() => console.log("B"), 0);
})
.then(() => {
    console.log("C");
});

// output:
// A
// C
// B
// A → microtask
// C → microtask
// B → macrotask