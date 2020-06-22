let bonus = 20;     //it's global

function sum(f,s) {
    let result = f+s+bonus;
    // console.log(bonus);
    // console.log(result);    //it's local
    if(result>9){
    var mood = "happy";
    mood = "fishy";
    // console.log(mood);
    }
    console.log(mood);         //(wasting)accessible for 'var' type, but not for 'let' and 'const'
    
    // console.log(day);
    // var day = "friday";        // In wasting only left part "var day" will be taken in parent scope not it's value

    return result;
}
const output = sum(3,7);
// console.log(bonus);          //accessible because of global
// console.log(output);         
// console.log(mood);           //anything in function is not accessible outside
