
/**
 * new-keyword-revision.js
 * Revision examples for JavaScript `new` keyword
 */

// Example 1: Basic constructor
function User(name){
  this.name = name;
}

const u = new User("Vishnu");
console.log(u.name);

/*
Output:
Vishnu
*/

// Example 2: Without new
function Person(name){
  this.name = name;
}

const p = Person("John");
console.log(p);
console.log(globalThis.name);

/*
Output:
undefined
John
*/

// Example 3: Returning primitive
function Foo(){
  this.x = 10;
  return 5;
}

const f1 = new Foo();
console.log(f1.x);

/*
Output:
10
*/

// Example 4: Returning object replaces instance
function Bar(){
  this.x = 10;
  return {y:20};
}

const f2 = new Bar();
console.log(f2.x);
console.log(f2.y);

/*
Output:
undefined
20
*/

// Example 5: Prototype sharing
function Animal(){}

Animal.prototype.sound = function(){
  console.log("Animal sound");
}

const a1 = new Animal();
const a2 = new Animal();

console.log(a1.sound === a2.sound);

/*
Output:
true
*/
