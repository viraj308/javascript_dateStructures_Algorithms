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

// Arrays

// A Javasript array is an object, with the indices being property names that are integers.
// hence there are set of set of properties and functions you can use with an array.

// The simpliest way to create array is by declaring an array variable.

var animals = []; // Array with the length of 0
console.log(animals.length); // displays 0

var items = ["tin", "boxes"]; // Array with the length of 2
console.log(items.length); // displays 2
 
// You can also create an array using an array constructor

var birds = new Array();
console.log(birds.length); // shows 0

var names = new Array("viraj", "vikrant", "kiran");
console.log(names.length); // shows 3

// finally you can create an array by calling the array constructor with the single argument specifying the length of the array.
var countries = new Array(10);
console.log(countries.length); // shows 10
console.log(countries); // 10 empty items

// Javascript array elements do not all have to be of the same type.
var elements = ["viraj", 10, null, undefined];
console.log(elements.length);

// you can also verify that an object is an array by using Array.isArray() function.

var color = "yellow";
var brands = ["nike", "puma"];
console.log(Array.isArray(color)); // displays false
console.log(Array.isArray(brands)); // displays true


// Accessing Array elements

var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers[i] = i; // You can access the array using it's index number
}
console.log(numbers); 

// Accessing all the elements of an array sequientially is much eaiser using a for loop

var names = [1, 2, 3, 4, 5];
var answer = 0;
for (var i = 0; i < names.length; i++) {
    answer += names[i];
}
console.log(answer);


// Creating Arrays form the strings
// Arrays can be creating from a string using a split() function.

var sentence = "He farted so loud that ..."
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    console.log(`Words : ${words[i]}`);  
}

// Aggregating Array

var cloths = ["shirts", "pants"];
var myCloths = cloths;
console.log(myCloths); // This creates a shallow copy, any change in original array would reflect in the copied one.

// This is how you can create a deep copy. you create a function for that...

var cars = ["mercedes", "ferrari"];
var myCars = [];
function copy(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        array2[i] = array1[i];
    }
}
copy(cars, myCars);
console.log(myCars);

// Accessor functions : Javascript provides a set of functions to access the elements of the array.

var seasons = ["summer", "winter"];
var answer = seasons.indexOf("summer"); // If the element exists, it returns the index of the element.
console.log(answer);
var answer2 = seasons.indexOf("rainy");
console.log(answer2); // It the elements doesn't exist, it returns -1




