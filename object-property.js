const students = [
    {id: 153, name: 'Iqbal Hossain'},
    {id: 191, name: 'Soheli Alam'},
    {id: 171, name: 'Farza Arusha'},
    {id: 161, name: 'Soha Ali Khan'}
];
// const nameAll = [];
// for (let i = 0; i < student.length; i++) {
//     const e = student[i];
//     console.log('name: ',e.name);
//     nameAll.push(e.name);
// }
// console.log(nameAll);

const allName = students.map(s => s.name);
const ids = students.map(i => i.id);
const fresher = students.filter(s => s.id>171);
const boroBhai = students.find(s => s.id<161);

console.log(allName);
