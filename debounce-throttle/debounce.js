
// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

function debounce(fn, delay) {
    console.log("Function not called")
    let timer;

    return function (...args) {
        console.log("Function called")

        clearTimeout(timer)
        console.log("Timer cleared")

        timer = setTimeout(() => {
            console.log("Executing function")
            fn.apply(this, args)
        }, delay)

    };
}

const fn = debounce(() => console.log("Hello"), 1000);

fn();
fn();
fn();
fn();
