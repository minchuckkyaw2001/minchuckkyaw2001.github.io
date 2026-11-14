// string data type
let name = "Chuck";
console.log(name);
console.log(typeof(name));

// numeric data type
let age = 25;
console.log(age);
console.log(typeof(age));

// boolean data type (true / false)
let isStudent = true;
console.log(isStudent);
console.log(typeof(isStudent));

// undefined data type
let undefinedVar;
console.log(undefinedVar);
console.log(typeof(undefinedVar));

// null data type
let nullVar = null;
console.log(nullVar);
console.log(typeof(nullVar));

// array data type => Array() / [] => index start from 0
let studentLists = ['Tun Tun', 'Su Su', 'Kyaw Kyaw', 'Aye Aye'];
console.log(studentLists);
console.log(typeof(studentLists));
console.log(studentLists.length);
console.log(studentLists[2]);

// object data type key : value;
let student = {
    name : "Min Khant Kyaw",
    age : 25,
    address : "Sanchaung, Myanmar",
    education : "B.A.History"
}
console.log(student);
console.log(typeof(student));
console.log(student.address);