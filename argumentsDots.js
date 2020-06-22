function addNumbers(numbers) {
    const a = [...arguments];
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        sum = sum + num;
    }
   return sum; 
   
}
const result = addNumbers(1,2,3,4,5);
console.log(result);