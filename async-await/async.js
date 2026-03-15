// async function always return promoise
async function test(){
    return 10; // In js background, it returns -> return Promoise.resolve(10)
}
// console.log(test())
// test().then(console.log)

// console.log("\nasync method topic: What await Actually Does")
// console.log("await pauses the async function until the Promise resolves")

async function testWait(){
    const result = await Promise.resolve(100);
    return result
}

// console.log("It returns the value with promise: ", testWait())
// console.log("It returns the value: ", testWait().then(console.log))


async function pauseTest(){
    console.log("A")

    const result = await Promise.resolve("B")

    console.log(result)
    console.log("C")
}
// console.log("D")


// console.log("\nSequenstial and parallel async/await methods call example")

async function school(){
       const sections = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(12)
        }, 3000)
    })
    return await sections;
}

async function college(){
    const courses = await Promise.resolve(4)
    return courses;
}

async function runSeq(){
    const a = await school()
    const b = await college()
    console.log(a)
    console.log(b)
}

async function runParallel(){
    const p1 =  school()
    const p2 =  college()
    const a = await p1;
    const b = await p2;

    console.log(a,b);
}


async function runSequential(){
        const result1 = await test()
        const result2 = await testWait()

        // console.log(test())
        // console.log(result1)
        // console.log("It returns the value with promise: ", testWait())
        // console.log("It returns the value: ", result2)
        // console.log("\nImportant: await Only Pauses the Function (Not JS)")
        // pauseTest()
        console.log("\nDiff between seq vs parallel async calls")
        await runSeq()
        runParallel()
}

runSequential()
