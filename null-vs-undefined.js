let name;
console.log(name);        // Didn't set any value => undefined

function add(n1,n2) {
    console.log(n2);      // n2 value is missing => undefined
    console.log(n1,n2);   // n2 value is missing => undefined
    console.log(n1+n2);   // n2 is missing to add=> NaN
    return                // return nothing => undefined
}
let sum = add(1);  
console.log(sum);

const dude = {name: "Tom", phone:458421};
console.log(dude.gf);    // 'gf' is not declared => undefined

let fun = undefined;
console.log(fun);        // already set as undefined => undefined

let ages = [1,2,3];
console.log(ages[5]);

let n = null;
console.log(n);         // null is something that we explicitly set as 'null' which means 'empty' => null