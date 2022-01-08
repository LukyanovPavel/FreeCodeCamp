//51
function timesFive(param) {
    return param * 5;
};

timesFive(5);
timesFive(2);
timesFive(0);

//52
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//53
function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//54
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = 'sweater';
    // Only change code above this line
    return outerWear;
}

myOutfit();

//55
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line


// Only change code above this line
function addFive() {
    sum += 5;
};

addThree();
addFive();

//56
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//57
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//58
function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

//59
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';


    // Only change code above this line

}

//60
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);