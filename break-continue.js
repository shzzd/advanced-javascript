const num = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < num.length; i++) {
    
    if(num[i]>4){
        break;                  // stops looping under condition
    }
    console.log(num[i]);
}

const number = [0,-1,2,-3,4,-5,6,-7,8,-9];
for (let i = 0; i < number.length; i++) {
    
    if(number[i]<0){
        continue;              // skipping values under condition but keeps continue the loop
    }
    console.log(number[i]);
}