function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3))
console.log(sum(1)(2))


console.log("Currying Technique: Multiple")

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

const mulitplication = multiply(2)
const triple = multiply(3)

console.log(mulitplication(10))
console.log(triple(5))

console.log("\nInterview trick questions")

function add(a) {
    return function (b) {
        return a + b
    }
}

const add5 = add(5)

console.log(add5(10))

console.log("\nAdvanced Currying (Dynamic Arguments)")
console.log("Method 1: sum(1)(2)(3)(4)() - deprected way using arguments.callee")

function sum(a) {
    let total = a;
    return function (b) {
        if (b === undefined) {
            return total
        }
        total += b
        return arguments.callee
    }
}

console.log(sum(1)(2)(3)(4)())

console.log("\n Method 2: add(1)(2)(3)(4)() - recurison")

function add(a) {
    let total = a;
    function inner(b) {
        if (b === undefined) {
            return total
        }
        total += b
        return inner
    }
    return inner
}

console.log(add(1)(2)(3)(4)())


console.log("\nHarder Interview Questions")
console.log(`
    1. addition(1)(2)(3)
    2. addition(1,2)(3)
    3. addition(1)(2,3)
    4. addition(1,2,3)

    All 4 as same output: 6
`)

function addition(...args) {
    if (args.length >= 3) {
        return args.reduce((sum, num) => sum + num, 0)
    }

    return function (...nextArgs) {
        return addition(...args, ...nextArgs)
    }
}

console.log(addition(1)(2)(3))
// console.log(addition(1,2)(3))
// console.log(addition(1)(2,3))
// console.log(addition(1,2,3))

// function argsExample(...args){
//     console.log("=== args", args)
//     argsExample(...[100,200,300], ...[500,600])
//     return
// }

// argsExample(1,2,3,4,5)


// Basic currying methods

function multiply1(a, b, c) {
    return a * b * c;
}

function multiplyCurrying(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log("multiply example: ", multiply1(2, 3, 4), "→ 24 ")
console.log("multiply Currying example: ", multiplyCurrying(2)(3)(4), "→ 24 ")

console.log("\nLevel 1 — Basic Currying Example Two: sum(5)(10)")

function sum1(a) {
    return function (b) {
        return a + b
    }
}
console.log(sum1(5)(10))

console.log("\nLevel 2 — Partial Application")

function add1(a) {
    return function (b) {
        return a + b
    }
}

const add10 = add1(10)
console.log(add10(5))  // 15
console.log(add10(20)) // 30

console.log("\nLevel 3 — Flexible Arguments")

function sumFlexible(...args) {
    // console.log("args", args)
    // let sum = 0;
    // if(args.length >= 3){
    //     return args.reduce((sum, num) => Number(sum) + Number(num), 0)
    // }
    console.log("args", args)

    return function (...nextArgs) {
        console.log("nextArgs", nextArgs)

        if (nextArgs.length > 0) {
            return sumFlexible(...args, nextArgs)
        }
        if (nextArgs.length === 0) {
            return [...args, ...nextArgs].reduce((sum, num) => Number(sum) + Number(num), 0)
        }
    }
}

console.log(sumFlexible(1)(2)(3)())
// console.log(sumFlexible(1,2)(3))
// console.log(sumFlexible(1)(2,3))
// console.log(sumFlexible(1,2,3))

console.log("\nsum(1)(2)(3)(4)() Infinite example")

function sumAdd(a) {

    let total = a

    return function next(b) {

        if (b === undefined) {
            return total
        }

        total += b
        return next
    }
}
sumAdd(1)(2)(3)

console.log("\nsum(1,2)(3)(4,5)()")

function nestedCurrying(...args) {
    let numbers = [...args]
    return function next(...nextArgs) {
        if (nextArgs.length === 0) {
            return numbers.reduce((sum, num) => sum + num, 0)
        }
        numbers.push(...nextArgs)
        return next
    }
}

console.log(nestedCurrying(1, 2)(3)(4, 5)())