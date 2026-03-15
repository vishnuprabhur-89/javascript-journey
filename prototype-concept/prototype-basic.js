// Prototype Example

console.log("==== Basic Prototype Example ====")
function User(name){
    this.name = name
}

User.prototype.greet = function(){
    console.log("Welcome: ", this.name)
}

const u1 = new User("Vishnu Prabhu R / Tech Lead - Object 1")
const u2 = new User("Vishnu Prabhu R / Youtuber - Object 2")
u1.greet()
u2.greet()

console.log("\nCustom Prototype Method")

function School(grade){
    this.grade=grade
}

School.prototype.set = function(grade){
    this.grade = grade
}
School.prototype.get = function(){
    console.log(this.grade)
}

const s1 = new School("10th")
s1.get()
s1.set("12th")
s1.get()

console.log("\nBeginner Problem: Library Book System")
// Problem: Library Book System

function Library(title, author){
    this.title = title
    this.author = author
}

Library.prototype = {
    getDetails: function(){
        console.log(`Book: ${this.title} by ${this.author}`)
    },
    updateTitle: function(title){
        this.title = title
    }
}

const L1 = new Library("The Secert", "James")
L1.getDetails()
L1.updateTitle("This secret updated by - ")
L1.getDetails()

console.log("\nBeginner Problem: Bank Account System")
//Problem: Bank Account System
function Bank(owner, balance){
    this.owner = owner
    this.balance = balance
}

Bank.prototype = {
    constructor: Bank,
    deposit: function(amount){
        this.balance += amount
    },
    withdraw: function(amount){
        if(this.balance >= amount){
            this.balance -=  amount
        }else{
            return this.balance
        }
    },
    getBalance: function(){
        return this.balance
    },
    transfer: function(amount, account){ 
        this.owner = account
        account.balance += amount 
    }
}

const B1 = new Bank("Vishnu Prabhu R", 100000)
const B2 = new Bank("Shoba Latha", 500000)
console.log("Balance: ", B1.getBalance())
B1.withdraw(5000)
console.log("Balance: ", B1.getBalance())
B1.deposit(10000)
console.log("Balance: ", B1.getBalance())

console.log("\nBonus challange: transfer amount, targetAccount")
console.log("Balance 2: ", B2.getBalance())
B1.transfer(100, B2)
console.log("Balance 2: ", B2.getBalance())


console.log("\nFAANG Interview Questions")
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(){
  console.log("Hello " + this.name);
}

const p1 = new Person("Vishnu");

Person.prototype = {
  greet: function(){
    console.log("Hi " + this.name);
  }
}

const p2 = new Person("Arun");

p1.greet();
p2.greet();

console.log("\nExample 2: FAANG")

function Car(model){
  this.model = model;
}

const c1 = new Car("BMW");

console.log(c1 instanceof Car);
console.log(c1 instanceof Object);

console.log("\nExample 3: FAANG")

function A(){}

A.prototype.value = 10;

const obj1 = new A();

A.prototype.value = 20;

const obj2 = new A();

console.log(obj1.value);
console.log(obj2.value);

obj1.value = 30;

console.log(obj1.value);
console.log(obj2.value);

console.log("\nExample 4: FAANG")

function Foo(){}

Foo.prototype.x = 10;

const a = new Foo();
const b = new Foo();

a.x = 20;

console.log(a.x);
console.log(b.x);

console.log("\nExample 5: FAANG")

function A1(){}

const a1 = new A1()

console.log(a1 instanceof A1)
console.log(a1 instanceof Object)

console.log("\nExample 6: FAANG")


function A2(){}

const a2 = new A2()

A2.prototype = {}

console.log(a2 instanceof A2)

console.log("\nExample 7: FAANG")
function A3(){}
function B3(){}

const a3 = new A3()

console.log(a3 instanceof B3)
console.log("\nExample 8: FAANG: Question 3 — Two Constructors")
function A4(){}
function B4(){}

B4.prototype = new A4()

const b4 = new B4()

console.log(b4 instanceof B4)
console.log(b4 instanceof A4)
console.log(b4 instanceof Object)


console.log("\nExample 9: FAANG:")
function Animal(){}

const dog = Object.create(Animal.prototype)

console.log(dog instanceof Animal)
console.log(dog instanceof Object)

console.log("\nExample 10: FAANG:")


function Animal1(){}

const dog1 = Object.create(Animal1.prototype)

console.log(dog1 instanceof Animal1)
console.log(dog1 instanceof Object)