/**
 * async-event-loop-revision.js
 * JavaScript Async / Await & Event Loop Revision Sheet
 * All examples include expected outputs for quick interview revision.
 */

// ----------------------------------------------------
// 1️⃣ Basic Async / Await Order
// ----------------------------------------------------
console.log("Example 1");

console.log("C");

async function test1(){
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test1();

console.log("D");

/*
Output:
C
A
D
B
*/



// ----------------------------------------------------
// 2️⃣ Async Function Returns Promise
// ----------------------------------------------------
console.log("\nExample 2");

async function test2(){
  return 10;
}

test2().then(console.log);

/*
Output:
10
Equivalent:
function test(){
  return Promise.resolve(10)
}
*/



// ----------------------------------------------------
// 3️⃣ Await with Non‑Promise
// ----------------------------------------------------
console.log("\nExample 3");

async function test3(){
  const value = await 10;
  console.log(value);
}

test3();

/*
Output:
10

Reason:
await 10 → await Promise.resolve(10)
*/



// ----------------------------------------------------
// 4️⃣ Promise vs setTimeout
// ----------------------------------------------------
console.log("\nExample 4");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise
Timeout
*/



// ----------------------------------------------------
// 5️⃣ Multiple Microtasks
// ----------------------------------------------------
console.log("\nExample 5");

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 0);
});

console.log("F");

/*
Output:
A
F
C
D
B
E
*/



// ----------------------------------------------------
// 6️⃣ Nested Microtasks
// ----------------------------------------------------
console.log("\nExample 6");

console.log("1");

Promise.resolve().then(()=>{
  console.log("2");

  Promise.resolve().then(()=>{
    console.log("3");
  });
});

Promise.resolve().then(()=>{
  console.log("4");
});

console.log("5");

/*
Output:
1
5
2
4
3
*/



// ----------------------------------------------------
// 7️⃣ Async + Promise Interaction
// ----------------------------------------------------
console.log("\nExample 7");

console.log("Start");

async function test7() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test7();

Promise.resolve().then(() => console.log("C"));

console.log("End");

/*
Output:
Start
A
End
B
C
*/



// ----------------------------------------------------
// 8️⃣ Async + setTimeout
// ----------------------------------------------------
console.log("\nExample 8");

console.log("Start");

async function foo8(){
  console.log("A");

  await Promise.resolve();

  console.log("B");

  setTimeout(()=>{
    console.log("C");
  });
}

foo8();

setTimeout(()=>{
  console.log("D");
});

console.log("End");

/*
Output:
Start
A
End
B
D
C
*/



// ----------------------------------------------------
// 9️⃣ Multiple Awaits
// ----------------------------------------------------
console.log("\nExample 9");

async function test9(){
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

console.log("Start");

test9();

console.log("End");

/*
Output:
Start
A
End
B
C
*/



// ----------------------------------------------------
// 🔟 Async + Promise + setTimeout
// ----------------------------------------------------
console.log("\nExample 10");

console.log("A");

setTimeout(()=>{
  console.log("B");
},0);

async function test10(){
  console.log("C");

  await Promise.resolve();

  console.log("D");
}

test10();

Promise.resolve().then(()=>{
  console.log("E");
});

console.log("F");

/*
Output:
A
C
F
D
E
B
*/



// ----------------------------------------------------
// 1️⃣1️⃣ Final Boss Example
// ----------------------------------------------------
console.log("\nExample 11");

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

async function foo11() {
  console.log("3");

  await Promise.resolve();

  console.log("4");

  await Promise.resolve();

  console.log("5");
}

foo11();

Promise.resolve().then(() => {
  console.log("6");
});

console.log("7");

/*
Output:
1
3
7
4
6
5
2
*/



/**
 * Event Loop Quick Rules
 *
 * 1. Run synchronous code first
 * 2. Move Promise/await callbacks → Microtask Queue
 * 3. Move setTimeout/setInterval → Macrotask Queue
 * 4. After call stack empty:
 *      run ALL microtasks
 * 5. Then run ONE macrotask
 * 6. Repeat
 *
 * Priority:
 * Call Stack → Microtask Queue → Macrotask Queue
 */
