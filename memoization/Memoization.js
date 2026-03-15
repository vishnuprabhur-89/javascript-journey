console.log("Memoization Concepts\n")

console.log("Basic Example in Memoization")

function square(n){
    console.log("Squre function called...")
    return n * n
}
console.log("\nWithout memoization: 1 ", square(5))
console.log("Without memoization: 2 ", square(5))
console.log("Without memoization: 3 ", square(5))

function memoziedSquare(){
    let cache = {}
    return function(n){
        if(cache[n]){
            console.log("From cached output")
            return cache[n]
        }
        let result = n * n
        cache[n] = result
        return result
    }
}

const squareMethod = memoziedSquare()
console.log("With cache square method: 1", squareMethod(5))
console.log("With cache square method: 2", squareMethod(10))
console.log("With cache square method: 3", squareMethod(5))

console.log("\nFibonacci Method")
// 0,1,1,2,3,5,8,13 etc

function fib(n){
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5))

console.log("\nMemozied fibonacci example")
function memoFib(){

    const cache = {}

    return function fib(n){

        if(n in cache) return cache[n]

        if(n <= 1) return n
        console.log("n3", n)

        console.log((n-1)+" "+(n-2), fib(n-1) + fib(n-2))
        cache[n] = fib(n-1) + fib(n-2)
        console.log(cache)
        console.log()
        return cache[n]
    }
}

const fib1 = memoFib()

console.log(fib1(7))

