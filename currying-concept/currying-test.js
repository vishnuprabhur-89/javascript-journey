console.log("Example 1: sum1(1)(2)(3)")

function sum1(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log("Example 1 output: ", sum1(1)(2)(3))
console.log("\nExample 2: sum2(1)(2)(3)()")

function sum2(a){
    return function(b){
        if(b === undefined){
            return a
        }
        return sum2(a + b)
    }
}
console.log("Example 2 output: ", sum2(1)(2)(3)())

console.log("\nExample 3: sum3(1,2)(3)(4,5)")

function sum3(a){

    let total = a

    function next(b){
        total += b
        return next
    }

    next.toString = function(){
        return total
    }

    return next
}
console.log("Example 3 output: ", String(sum3(1,2)(3)(4,5)))

function sum4(a){
    let total = a;

    function next(b){
        total+=b
        return next
    }
    next.toString = function(){
        return total
    }
    return next
}
console.log(sum4(1)(10)(9))
console.log(String(sum4(1)(10)(9)))
console.log("\nExample 4: sum4(1,2)(3)(4,5)()")