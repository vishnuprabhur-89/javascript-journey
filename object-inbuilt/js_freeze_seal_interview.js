
// ===============================================
// JavaScript Object.freeze / Object.seal
// FAANG Style Interview Revision File
// ===============================================


// ===============================================
// SECTION 1 — Basic freeze behaviour
// ===============================================

const obj1 = { a: 1 };
Object.freeze(obj1);

obj1.a = 10;

console.log(obj1.a);
// Output: 1
// Reason: frozen properties are not writable



// ===============================================
// SECTION 2 — Adding properties after freeze
// ===============================================

const obj2 = { a: 1 };
Object.freeze(obj2);

obj2.b = 2;

console.log(obj2.b);
// Output: undefined
// Reason: cannot add new properties



// ===============================================
// SECTION 3 — freeze vs strict mode
// ===============================================

"use strict";

const obj3 = { a: 1 };
Object.freeze(obj3);

try {
  obj3.a = 5;
} catch (e) {
  console.log("error");
}

// Output: error
// Reason: strict mode throws TypeError



// ===============================================
// SECTION 4 — freeze is shallow
// ===============================================

const obj4 = {
  user: { name: "Vishnu" }
};

Object.freeze(obj4);

obj4.user.name = "Ram";

console.log(obj4.user.name);
// Output: Ram
// Reason: nested objects are not frozen



// ===============================================
// SECTION 5 — replace nested reference
// ===============================================

const obj5 = {
  user: { name: "Vishnu" }
};

Object.freeze(obj5);

obj5.user = { name: "Ram" };

console.log(obj5.user.name);
// Output: Vishnu
// Reason: top-level property cannot be reassigned



// ===============================================
// SECTION 6 — Object.seal behavior
// ===============================================

const obj6 = { a: 1 };

Object.seal(obj6);

obj6.a = 10;
delete obj6.a;

console.log(obj6);
// Output: { a: 10 }
// Reason:
// modification allowed
// deletion not allowed



// ===============================================
// SECTION 7 — adding property in sealed object
// ===============================================

const obj7 = { a: 1 };

Object.seal(obj7);

obj7.b = 5;

console.log(obj7.b);
// Output: undefined
// Reason: new properties cannot be added



// ===============================================
// SECTION 8 — freeze + nested freeze
// ===============================================

const obj8 = {
  a: { b: 1 }
};

Object.freeze(obj8);

obj8.a.b = 5;

Object.freeze(obj8.a);

obj8.a.b = 20;

console.log(obj8.a.b);
// Output: 5
// Reason:
// first update allowed
// second blocked



// ===============================================
// SECTION 9 — freeze array
// ===============================================

const arr = [1,2,3];

Object.freeze(arr);

arr[0] = 10;

console.log(arr[0]);
// Output: 1



// ===============================================
// SECTION 10 — spread after freeze
// ===============================================

const obj10 = { a: 1 };

Object.freeze(obj10);

const obj11 = { ...obj10 };

obj11.a = 100;

console.log(obj10.a);
console.log(obj11.a);

// Output:
// 1
// 100

// Reason:
// spread creates new object



// ===============================================
// SECTION 11 — Object.isFrozen
// ===============================================

const obj12 = { a: 1 };

Object.freeze(obj12);

console.log(Object.isFrozen(obj12));
// Output: true



// ===============================================
// SECTION 12 — Implement Deep Freeze (Interview)
// ===============================================

function deepFreeze(obj){

  Object.freeze(obj);

  Object.keys(obj).forEach(key => {

    if(
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ){
      deepFreeze(obj[key]);
    }

  });

  return obj;

}



// Example usage

const user = {
  name: "Vishnu",
  address: {
    city: "Chennai"
  }
};

deepFreeze(user);

user.address.city = "Mumbai";

console.log(user.address.city);
// Output: Chennai



// ===============================================
// SECTION 13 — Deep freeze tricky interview
// ===============================================

const config = {
  server:{
    port:3000
  }
};

deepFreeze(config);

config.server.port = 9000;

console.log(config.server.port);

// Output: 3000



// ===============================================
// SECTION 14 — Freeze vs Seal summary
// ===============================================

// freeze
// add ❌
// delete ❌
// modify ❌

// seal
// add ❌
// delete ❌
// modify ✅



// ===============================================
// END OF REVISION FILE
// ===============================================
