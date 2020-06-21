const first = 2;
const second = "2";

if (first == second) {     // check only value
    console.log("true")
} else {
    console.log("false")
}

if (first === second) {    //check both value and type
    console.log("true")
} else {
    console.log("false")
}

/////////////////////////  '1' means true
if (1 == true) {              // check only value
    console.log("true")
} else {
    console.log("false")
}
if (1 === true) {             //check both value and type
    console.log("true")
} else {
    console.log("false")
}
/////////////////////////   '0' means false
if (0 == false) {            // check only value
    console.log("true")
} else {
    console.log("false")
}
if (0 === false) {           //check both value and type
    console.log("true")
} else {
    console.log("false")
}