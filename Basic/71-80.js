//71
function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

//72
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

//73
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//74
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else if (num >= 20) {
        return 'Huge';
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);

//75
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (par - 2 >= strokes) {
        return "Eagle";
    } else if (par - 1 == strokes) {
        return "Birdie";
    } else if (par == strokes) {
        return "Par";
    } else if (par + 1 == strokes) {
        return "Bogey";
    } else if (par + 2 == strokes) {
        return "Double Bogey";
    } else if (par + 3 <= strokes) {
        return "Go Home!";
    }
    // Only change code above this line
}

golfScore(5, 4);

//76
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
            return 'alpha';
            break;
        case 2:
            return 'beta';
            break;
        case 3:
            return 'gamma';
            break;
        case 4:
            return 'delta';
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);

//77
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            return 'apple'
            break;
        case 'b':
            return 'bird'
            break;
        case 'c':
            return 'cat'
            break;
        default :
            return 'stuff'
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

//78
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
        case 7:
        case 8:
        case 9:
            return "High";
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

//79
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

//80
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);