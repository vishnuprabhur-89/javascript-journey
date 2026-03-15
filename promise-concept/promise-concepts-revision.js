
/**
 * promise-concepts-revision.js
 * Promise fundamentals for interview revision
 */

// Example 1: Basic Promise
const p1 = new Promise((resolve,reject)=>{
  resolve(10);
});

p1.then(console.log);

/*
Output:
10
*/

// Example 2: Promise chaining
Promise.resolve(5)
.then(v => v * 2)
.then(v => console.log(v));

/*
Output:
10
*/

// Example 3: Error handling
Promise.reject("Error")
.catch(err => console.log(err));

/*
Output:
Error
*/

// Example 4: Promise.all
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log);

/*
Output:
[1,2,3]
*/

// Example 5: Promise.race
Promise.race([
  new Promise(r => setTimeout(()=>r("A"),100)),
  new Promise(r => setTimeout(()=>r("B"),50))
]).then(console.log);

/*
Output:
B
*/
