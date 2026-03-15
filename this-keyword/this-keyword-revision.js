
/**
 * this-keyword-revision.js
 * Examples for understanding `this` binding
 */

// Example 1: Global this
function show(){
  console.log(this);
}

show();

/*
Output:
global object (window in browser, global in Node)
*/

// Example 2: Method this
const user = {
  name: "John",
  greet(){
    console.log(this.name);
  }
}

user.greet();

/*
Output:
John
*/

// Example 3: Arrow function this
const obj = {
  name:"Alex",
  greet: () => {
    console.log(this.name);
  }
}

obj.greet();

/*
Output:
undefined (arrow doesn't bind this)
*/

// Example 4: call
function greet(){
  console.log(this.name);
}

const person = {name:"Sam"};

greet.call(person);

/*
Output:
Sam
*/

// Example 5: bind
const bound = greet.bind(person);
bound();

/*
Output:
Sam
*/
