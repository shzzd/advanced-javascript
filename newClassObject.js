class person{
    constructor(fn,ln,sl){
        this.firstName = fn;
        this.lastName = ln;
        this.salary = sl;
    }
}

const friend = new person('Tom','Cruise',25000);
console.log('Friend:',friend,'\n');

const relative = new person('Robert','Downey Jr.', 30000);
console.log('relative:',relative,'\n');

//We can do it using 'function' is an old way:
function personOld(fn,ln,sl) {
    this.firstName = fn;
    this.lastName = ln;
    this.salary = sl;
}

const minister = new personOld('Zunaid','Ahmed',35000);
console.log('Minister:',minister);