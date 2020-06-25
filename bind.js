const person = {
    firstName:'Tom',
    lastName:'Jacob',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary-amount;
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
person.chargeBill(500);
console.log('Person salary after charged: ',person.salary,'\n');

console.log('Friend:',friend);
const friendChargeBill = person.chargeBill.bind(friend);
friendChargeBill(500);
console.log('Friend salary after charged:',friend.salary,'\n');

console.log('Relative:',relative);
const relativeChargeBill = person.chargeBill.bind(relative);
relativeChargeBill(500);
console.log('Relative salary after charged:',relative.salary,'\n');
