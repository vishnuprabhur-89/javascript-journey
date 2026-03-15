
/**
 * prototype-revision.js
 * Prototype and prototypal inheritance examples
 */

// Example 1: Basic prototype method
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(){
  console.log("Hello " + this.name);
}

const p1 = new Person("Alex");
p1.greet();

/*
Output:
Hello Alex
*/

// Example 2: Shared methods
const p2 = new Person("Bob");

console.log(p1.greet === p2.greet);

/*
Output:
true
*/

// Example 3: Prototype chain lookup
function Animal(){}
Animal.prototype.sound = "generic";

const dog = new Animal();
console.log(dog.sound);

/*
Output:
generic
*/

// Example 4: Overriding prototype property
dog.sound = "bark";
console.log(dog.sound);

/*
Output:
bark
*/

// Example 5: constructor reference
console.log(dog.constructor === Animal);

/*
Output:
true
*/
