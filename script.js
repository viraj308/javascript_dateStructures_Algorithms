// Javascript Variables

var number = 3; // num
console.log(number);
var name = "Viraj"; // string
console.log(name);
var isPretty = false;  // boolean
console.log(isPretty);
var animal; // declared variable but no initialized.
animal = "camel";
console.log(animal);

// Arithmatic and Math library functions 

// basic arithmatic operators
var x = 2;
var y = 4;
console.log(x + y); // addition
console.log(y - x); // subtraction
console.log(y % 2); // modulus operator
console.log(x * y); // multiplication
console.log(y / x); // Divsion
console.log(Math.sqrt(y)); // A math library function

// Decision Constructs

/* The two decision constructs we will use are the 
1. if
2. switch
*/

// simple if :

var num1 = 3;
var num2 = 3;
if (num1 === num2) {
    console.log("The operation was a success");
}

// if-else

var one = 3;

if (one > 4) {
    console.log("fuck off");
}
else {
    console.log("hello")
}

// if-else if

var two = 5;

if (two === 3) {
    console.log("it's three");
}
else if (two === 4) {
    console.log("it's four");
}
else if (two === 5) {
    console.log("it's five");
}
else {
    console.log("it's none of the above");
}

// The other descision construct is the switch statement
// It provides more cleaner look if there are multiple else-if statements

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("It's monday");
    case "Sunday":
        console.log("It's sunday");
}

/* The loops:
1. the while loop
2. the for loop
*/

// the while loop : if you want to execute a set of statements while the condition is true then you use while loop.

var number = 0;

while (number < 5) {
    number += 1;
    console.log(number);
}

// When we want to execute a set of statements for a number of times we use for loop

for (var i = 0; i < 5; i++) {
    console.log("hello");
}

// Functions: there are two types of functions, value returning and the functions that dont return any value or void functions

// Value returning function :

function factorial(number) {
    var product = 1;
    for (var i = number; i >= 1; i--) {
        product *= i;
    }
    return product;
}
console.log(factorial(3)); 

// Void functions:

function sum (x, y) {
    addition = x + y;
    console.log(`sum: ${addition}`); // A template string
}
sum(4, 2);

// Scope of the variables

// 1. Global Scope

var scope = "global";
function showScope() {
    return scope;
}
console.log(showScope()); 
/* the function can access the scope variable because it was declared outside the function,
which makes it a global variable*/
// Global variables can be declared anywhere in the program, you can declare the scope variable after the function or before the function.

// 2. Local Scope

var scope = "global";
function showScope() {
    var scope = "local";
    return scope;
}
console.log(showScope());
console.log(scope);

/* the variale defined in the function has a local scope while the variable defined in the 
main progarm has a global scope. Javascript allows you to define variables without the var
keyword, but defining a variable without a var keyword automatically makes it a global var
even if it's inside a function*/

/* Javascript doesn't have the block scope for variable,block of scope means when a variable is declared within a 
block of code, it isn't available outside the block.
*/

// Recursion

function factorial(number) {
    if (number === 1) {
        return number;
    }
    else {
        number = number * factorial(number - 1);
        return number;
    }
}
console.log(factorial(5));


/* Most of the data structures in javascript are implemented as objects.
Javascript provides many ways for creating and using objects.
Here objects are created by using a constructor function the includes the delcaration of 
the objects properties and functions.
*/

// Here is a constructor function


function Checking(amount) {
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.yourBalance = yourBalance; // function
}
function deposit(amount) {
    this.balance += amount;
    console.log(amount + " was successfully deposited.");
}
function withdraw(amount) {
    if (amount > this.balance) {
        console.log("Insufficient funds");
    }
    else {
        this.balance -= amount;
        console.log(amount + " was successfully withdrawn.");
    }

}
function yourBalance() {
    console.log("Your Balance is: " + this.balance);
}


var one = new Checking(200);
console.log(one.balance);
one.deposit(500);
one.yourBalance(); 
one.withdraw(500);
one.yourBalance();
one.deposit(1000);
one.yourBalance();
one.withdraw(2000);
one.yourBalance();






