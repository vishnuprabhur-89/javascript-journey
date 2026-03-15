// new keyword basic example
function Person(){
    console.log(this.name)
    return 10;
}

function Neighbour(){
    console.log(this.name)
    return {age: 28};
}

const G = new Person("Vishnu Prabhu R");
const N = new Neighbour("Vishnu Prabhu R");
console.log("Person output", G)
console.log("Neighbour output", N)

console.log("\nSenior level new method")

function Person1(name){
    this.name = name
}

function myNew(constructor, ...args) {

  const obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(obj, args);
  return typeof result === "object" ? result : obj;

}
const p = myNew(Person1, "Vishnu");

console.log(p)