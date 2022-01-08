//41
const myArray = [50, 60, 70];
let myData = myArray[0];

//42
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

//43
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//44
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(['dog', 3]);

//45
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop();

//46
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray = myArray.shift();

//47
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

//48
const myList = [['Milk', 2],['Bread', 1],['Chokolate', 3],['Icecream', 4],['Egg', 10]];

//49
function reusableFunction () {
    console.log("Hi World");
}

reusableFunction();

//50
function functionWithArgs(numOne, numTwo) {
    console.log(numOne + numTwo);
}

functionWithArgs(1, 2);