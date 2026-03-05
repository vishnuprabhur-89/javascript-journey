function outer(){
    let a = 1;
    function inner(){
        a++;
        console.log(a);
    }
    return inner
}

const counter = outer();
counter();
counter();
counter();

console.log("--------- Closure with setTimeout --------- \n");

for(var i=0;i<3;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

console.log("In the above code, using closure we can able to resolve it")

for(var j=0;j<3;j++){

    function wrapper(i){
        setTimeout(() => {
            console.log(i)
        }, 100);
    }
    wrapper(j);
}

console.log("--- One Killer Interview Question --- \n");

for(var i=0;i<3;i++){
  setTimeout(console.log,1000,i)
}

console.log("--- Closure method real time example --- \n");
console.log("Data privacy")
function bankAccount(){
    let balance = 1000;
    return {
        deposit(amount){
            balance+=amount;
            console.log(`Deposited: ${amount}, Current Balance: ${balance}`);
        },
        getBalance(){
            return balance;
        }
    }
}

const myAccount= bankAccount();
myAccount.deposit(100);
console.log("Current Balance: " + myAccount.getBalance());
console.log("--- end --- \n");

function outer1() {
  let counter1 = 0;

  return {
    inc: () => ++counter1,
    get: () => counter1
  };
}

const a1 = outer1();
const b1 = outer1();

a1.inc();
a1.inc();

console.log("a1.get():", a1.get());
console.log("b1.get():", b1.get());

console.log("---- closure createLoginTracker ---- \n");

function createLoginTracker(){
    let maxLoginAttempts = 3;

    return{
        login: (state) => {
            if(!state){
                if(maxLoginAttempts <= 0){
                    console.log("Account locked due to too many failed login attempts.");
                    return;
                }
                maxLoginAttempts--;
                console.log(`Login failed. Remaining attempts: ${maxLoginAttempts}`);
            }
            console.log(`Login ${state ? "successful" : "failed"}.`);
        }
    }
}

const tracker = createLoginTracker();
tracker.login(true);
tracker.login(false);
tracker.login(false);
tracker.login(false);
tracker.login(false);


function createLoginTracker1() {

    let failedAttempts = 0;
    let maxAttempts = 3;
    let locked = false;

    return {
        login(success) {

            if (locked) {
                console.log("Account is locked");
                return;
            }

            if (success) {
                console.log("Login successful");
                failedAttempts = 0;
                return;
            }

            failedAttempts++;

            if (failedAttempts >= maxAttempts) {
                locked = true;
                console.log("Account locked");
                return;
            }

            console.log(`Login failed (${failedAttempts} attempt)`);
        }
    };
}