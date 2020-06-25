const person = {
    firstName:'Tom',
    lastName:'Jacob',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount,tax,tips){
        this.salary = this.salary-amount-tax-tips;
        return this.salary;
    }
}
const friend = {
    firstName:'Stilse',
    lastName:'Stilinski',
    salary:25000
}
const relative = {
    firstName:'Mike',
    lastName:'Leaker',
    salary:32000
}

console.log('Person:',person);
person.chargeBill(500,20,50);
console.log('Person salary after charged:',person.salary,'\n');

console.log('friend:',friend);
person.chargeBill.call(friend,1000,150,50);
console.log('Friend salary after charged:',friend.salary,'\n');

console.log('Relative:',relative);
person.chargeBill.apply(relative,[2000,300,200]);
console.log('Relative after charged:',relative.salary,'\n');
