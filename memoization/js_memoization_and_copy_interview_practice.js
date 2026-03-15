/*
========================================================
JS INTERVIEW PRACTICE
Topics:
1. Memoization
2. Shallow Copy
3. Deep Copy
Predict output before running.
========================================================
*/


/*
==============================
MEMOIZATION QUESTIONS
==============================
*/


// Q1 Basic Memoization
console.log("Q1");

function memoAdd() {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("cache");
      return cache[n];
    }

    console.log("compute");
    cache[n] = n + 10;
    return cache[n];
  };
}

const add = memoAdd();

console.log(add(5));
console.log(add(5));


// Expected
// compute
// 15
// cache
// 15




// Q2 Memoized Fibonacci
console.log("Q2");

function memoFib() {
  let cache = {};

  return function fib(n) {

    if (n in cache) {
      console.log("cache:", n);
      return cache[n];
    }

    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = memoFib();

console.log(fib(6));



// Q3 Memoization Closure Trap
console.log("Q3");

function memo() {

  let cache = {};

  return function (num) {

    if (cache[num]) {
      return cache[num];
    }

    cache[num] = num * 2;

    return cache[num];
  };
}

const m1 = memo();
const m2 = memo();

console.log(m1(5));
console.log(m1(5));
console.log(m2(5));


// Expected
// 10
// 10 (cache)
// 10 (new cache)




// Q4 Memoization Object Key Trap
console.log("Q4");

function memoize(fn) {

  const cache = {};

  return function (arg) {

    if (cache[arg]) {
      return cache[arg];
    }

    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}

const double = memoize(x => x * 2);

console.log(double({a:1}));
console.log(double({a:1}));


// Expected
// Different results each time
// Objects are different references




/*
==============================
SHALLOW COPY QUESTIONS
==============================
*/


// Q5
console.log("Q5");

const obj1 = { a:1, b:{c:2} };
const obj2 = {...obj1};

obj2.b.c = 5;

console.log(obj1.b.c);


// Expected
// 5




// Q6
console.log("Q6");

const obj3 = { a:1, b:{c:2} };
const obj4 = {...obj3};

obj4.b = {c:10};

console.log(obj3.b.c);


// Expected
// 2




// Q7
console.log("Q7");

const arr1 = [{x:1},{y:2}];
const arr2 = [...arr1];

arr2[0].x = 10;

console.log(arr1[0].x);


// Expected
// 10




// Q8
console.log("Q8");

const obj5 = { a:1 };

const obj6 = {...obj5};

obj6.a = 100;

console.log(obj5.a);


// Expected
// 1




/*
==============================
DEEP COPY QUESTIONS
==============================
*/


// Q9 JSON Deep Clone
console.log("Q9");

const obj7 = { a:{b:1} };

const obj8 = JSON.parse(JSON.stringify(obj7));

obj8.a.b = 10;

console.log(obj7.a.b);


// Expected
// 1




// Q10 Structured Clone
console.log("Q10");

const obj9 = { a:{b:1} };

const obj10 = structuredClone(obj9);

obj10.a.b = 50;

console.log(obj9.a.b);


// Expected
// 1




// Q11 Nested Array Trap
console.log("Q11");

const arr3 = [[1,2],[3,4]];

const arr4 = [...arr3];

arr4[0][0] = 99;

console.log(arr3[0][0]);


// Expected
// 99




// Q12 Spread + Deep Replacement
console.log("Q12");

const state = {
  user:{
    profile:{
      name:"Vishnu"
    }
  }
};

const newState = {
  ...state,
  user:{
    ...state.user,
    profile:{
      ...state.user.profile,
      name:"Ram"
    }
  }
};

console.log(state.user.profile.name);


// Expected
// Vishnu