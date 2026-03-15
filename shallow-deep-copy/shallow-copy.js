const obj1 = {
    name: "Vishnu",
    address: {
        city: "Krishnagiri"
    }
}

const obj2 = {...obj1}

obj2.name = "Prabhu"
obj2.address.city = "Bangalore"

console.log(obj1)
console.log(obj2)

console.log("\n Example 2")

const obj3 = {
  a: 1,
  b: { c: 2 }
};

const obj4 = { ...obj3 };

obj4.b.c = 5;
obj4.a = 10;

console.log(obj3)
console.log(obj4)

console.log(obj3.a);
console.log(obj3.b.c);

console.log("\nBasic shallow copy")

const obj11 = { a: 1, b: { c: 2 } };

const obj22 = { ...obj11 };

obj22.b.c = 5;

console.log(obj11.b.c);

// PROBLEM2: 
console.log("\nReference Replacement")

const obj5 = { a: 1, b: { c: 2 } };

const obj6 = { ...obj5 };

obj6.b = { c: 10 };

console.log(obj5.b.c);

console.log("\nNested Spread")

const obj7 = {
  a: { b: 1 }
};

const obj8 = { ...obj7 };

obj8.a.b = 5;

console.log(obj7.a.b);

console.log("\nDOuble Spread")

const obj12 = {
  a: { b: 1 }
};

const obj23 = { ...obj12 };

obj23.a = { ...obj23.a };

obj23.a.b = 10;

console.log(obj12.a.b);
console.log("\nArray Spread")


const arr1 = [{ x: 1 }, { y: 2 }];

const arr2 = [...arr1];
arr2[0].x = 10;

console.log(arr1[0].x);

console.log("\Spread primitive")

const object1 = { a: 1 };

const object2 = { ...object1 };

object2.a = 10;

console.log(object1.a);

console.log("\n Deep nested")
const objects1 = {
  a: {
    b: {
      c: 1
    }
  }
};

const objects2 = { ...objects1 };

objects2.a.b.c = 99;

console.log(objects1.a.b.c);


const obje1 = {
  a: { b: 1 }
};

const obje2 = { ...obje1 };

obje2.a.b = 2;
obje2.a = { b: 3 };

console.log(obje1.a.b);

console.log("\nSpread inside spread")

const objFirst = {
  a: { b: 1 }
};

const objSecond = { ...objFirst };

const objThird = { ...objSecond };

objThird.a.b = 10;

console.log(objFirst.a.b);

console.log("\nreact Immutablity")

const state = {
  user: {
    name: "Vishnu"
  }
};

const newState = { ...state };

newState.user.name = "Ram";

console.log(state.user.name);