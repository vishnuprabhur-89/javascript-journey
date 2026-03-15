# JavaScript Currying -- Interview Practice (FAANG Style)

This file contains common **currying interview questions** with expected
outputs. Use it to revise concepts like **closures, recursion,
rest/spread, and functional programming**.

------------------------------------------------------------------------

## 1. Basic Currying

``` javascript
function multiply(a){
  return function(b){
    return function(c){
      return a * b * c;
    }
  }
}

console.log(multiply(2)(3)(4));
// Output: 24
```

------------------------------------------------------------------------

## 2. Simple Add Currying

``` javascript
function add(a){
  return function(b){
    return a + b;
  }
}

console.log(add(5)(10));
// Output: 15
```

------------------------------------------------------------------------

## 3. Partial Application

``` javascript
function add(a){
  return function(b){
    return a + b;
  }
}

const add10 = add(10);

console.log(add10(5));
console.log(add10(20));

// Output:
// 15
// 30
```

------------------------------------------------------------------------

## 4. Infinite Currying

``` javascript
function sum(a){
  return function(b){
    if(b === undefined) return a;
    return sum(a + b);
  }
}

console.log(sum(1)(2)(3)(4)());
// Output: 10
```

------------------------------------------------------------------------

## 5. Flexible Arguments Currying

``` javascript
function addition(...args){

  if(args.length >= 3){
    return args.reduce((sum,n)=>sum+n,0);
  }

  return function(...next){
    return addition(...args,...next);
  }
}

console.log(addition(1)(2)(3));
console.log(addition(1,2)(3));
console.log(addition(1)(2,3));
console.log(addition(1,2,3));

// Output:
// 6
// 6
// 6
// 6
```

------------------------------------------------------------------------

## 6. Closure + Currying

``` javascript
function createMultiplier(x){
  return function(y){
    return x * y;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Output:
// 10
// 15
```

------------------------------------------------------------------------

## 7. Currying with Recursion

``` javascript
function add(a){
  return function(b){
    if(!b) return a;
    return add(a+b);
  }
}

console.log(add(1)(2)(3)(4)());
// Output: 10
```

------------------------------------------------------------------------

## 8. Famous Interview Question (valueOf Trick)

``` javascript
function sum(a){
  let current = a;

  function inner(b){
    current += b;
    return inner;
  }

  inner.valueOf = function(){
    return current;
  }

  return inner;
}

console.log(sum(1)(2)(3));
// Output: 6
```

------------------------------------------------------------------------

## 9. Advanced Currying Combination

``` javascript
function sum(a){
  let total = a;

  function inner(b){
    if(b === undefined) return total;
    total += b;
    return inner;
  }

  return inner;
}

console.log(sum(1)(2)(3)(4)(5)());
// Output: 15
```

------------------------------------------------------------------------

## 10. Uber / Airbnb Style Question

``` javascript
function sum(a){
  let total = a;

  function inner(b){
    total += b;
    return inner;
  }

  inner.valueOf = function(){
    return total;
  }

  return inner;
}

console.log(sum(1)(2)(3) + sum(4)(5));
// Output: 15
```

------------------------------------------------------------------------

# Topics Covered

• Basic Currying\
• Infinite Currying\
• Flexible Argument Currying\
• Currying + Closures\
• Currying + Recursion\
• valueOf / toString Interview Tricks

Practice writing these from memory before interviews.
