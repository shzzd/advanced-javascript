// falsy: false, 0, "", undefined, null, NaN
// Truthy: "0", " ", [], {}

let name = 0
if (name || name==0) {
    console.log("It's true")
}
else{
    console.log("It's false")
}
