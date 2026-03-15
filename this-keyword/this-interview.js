// Using this keyword in interview questions

const person = {
    name: "Vishnu Prabhu R",
    greet(){
        const getName = () => {
            console.log(this.name); // Arrow function inherits this from the enclosing scope, which is the person object
        }
        getName(); // Logs: Vishnu Prabhu R
    }
}
console.log("\n Using this keyword in arrow functions in two methods: One has value and another as undefined");
person.greet();

// Dangerous Example

const user = {
  name: "Vishnu",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // Logs: undefined, because arrow functions do not have their own this and it refers to the global object where name is not defined.

console.log("\n In explict binding am trying three different methods: call, apply and bind");

function source(role, plan){
    console.log("Name ", this.name, " Role ", role, " Plan ", plan);
}

const obj = {name: "Vishnu Prabhu R"};

source.call(obj, "Full Stack Developer + AI Expertise", "call"); // call() method calls a function with a given this value and arguments provided individually.
source.apply(obj, ["Full Stack Developer + AI Expertise", "apply"]); // apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
const boundSource = source.bind(obj, "Full Stack Developer + AI Expertise", "bind"); // bind() method creates a new function that, when called, has its this keyword set to the provided value.
boundSource(); // Logs: Name  Vishnu Prabhu R  Role  Software Engineer  Plan  Full Stack Developer + AI Expertise