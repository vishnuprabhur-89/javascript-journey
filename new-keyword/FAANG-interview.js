function User(name){
  this.name = name;
}

const u = User("Vishnu");

console.log(u);
console.log(globalThis.name); // The globalThis property in JavaScript provides a standardized way to access the global object regardless of the environment in which the code is running.

// OUTPUT: 
// undefined
// Vishnu

// Classic Interview Question

function Person(name){
  this.name = name;
  return { age: 25 };
}

const p = new Person("Vishnu");

console.log(p);
//  { age: 25 }; Because it's return always non primitive values as prioirty.
// return object → replace instance
// return primitive → ignored

// Primitive Return Trick

function Person(name){
  this.name = name;
  return 100;
}

const p1 = new Person("Vishnu");

console.log(p1);
// output: {name: "vishnu"}

// Prototype Interview Question

function Animal(){}

Animal.prototype.sound = function(){
  console.log("Animal sound");
}

const a1 = new Animal();
const a2 = new Animal();

console.log(a1.sound === a2.sound);

// output: true

function Foo(){
  this.x = 10;
  return { y: 20 };
}

const f = new Foo();

console.log(f.x);
console.log(f.y);
// output: 
// undefined
// 20