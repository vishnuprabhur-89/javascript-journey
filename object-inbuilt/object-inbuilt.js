// const obj = {
//   user: {
//     name: "Vishnu"
//   }
// };

// Object.freeze(obj);

// obj.user.name = "Ram";

// console.log(obj.user.name);

const user = {
    name: "Vishnu"
}

Object.seal(user)
user.name = "Vishnu Prabhu R"

user.age = 10
user.name= {age: 30}

delete user.name
console.log(user)