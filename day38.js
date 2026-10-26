// console.log('My name is Emmanuel');
// let, const, var
// let > reassignation(let name = "Emma", name = "John"[this is the advantage of let keyword, its also it disadvantages]), const > const age = 20([This does not allow reassignment]),
// let name =  "Pelumi" (for let we can declare a variable without assigning a value)let age; age = 12
// const gender = "";

// Conditionals
// let score = 75;
// // if
// if (score >= 70) {
//     console.log('Help me buy rice');
// };
// // else
// if (score >= 60) {
//     console.log('Help me buy rice');
// } else {
//     console.log('Help me buy beans');
// }
// // else if
// if (score >= 40 && score < 50) {
//     console.log('Help me buy rice');
// } else if (score >= 50 && score < 60) {
//     console.log('Help me buy beans');
// } else if (score >= 60 && score < 70) {
//     console.log('Help me buy yam');
// } else if (score >= 70 && score <= 100) {
//     console.log('Help me buy Yogurt');
// } else {
//     console.log('Something is wrong with your score, score should be between 0 and 100');
// };

// Js operators
// 1. assignment op (=)
// 2. comparism op (>, <, ==, ===, <=, >=) let age = "20" [age == 20 => true, age === 20 => false]
// 3. arithmetic op (+, -, *, /, %)
// 4. increamental/decremental op (++, --, +-, +*, -+, -*, +=)[for (let i = 0; i < 10; i++)]
// 5. logical op (&&, ||, !)

// // Ternary operator
// let age = 18;
// let gender = 'others';
// let isAdult = (age >= 18) ? 'You are an adult' : 'You are not an adult';
// let isGreetings = (gender === 'male') ? 'You are welcome Mr. ...' : (gender === 'female') ? 'You are welcome Ms. ...' : 'You are welcome Sir/Madam ...';
// console.log(isAdult);
// console.log(isGreetings);

// // Switch statement
// let today = 'Friday';
// switch (today) {
//     case 'Monday':
//         console.log('It is Monday');
//         break;
//     case 'Tuesday':
//         console.log('It is Tuesday');
//         break;
//     case 'Wednesday':
//         console.log('It is Wednesday');
//         break;
//     default:
//         console.log('It is not a weekday');
// }

// 7th of August, 2026
// Loops
// let users = ["Emmanuel", "John", "Mary", "Peter", "Paul"]; //array of items
// let userData = [
//   { name: "Emmanuel", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Mary", age: 28 },
//   { name: "Peter", age: 35 },
//   { name: "Paul", age: 40 },
// ]; //array of objects
// 1. FOR loops
// for (let i = userData.length - 1; i >= 0; i--) {
//   console.log(
//     `${userData[i].name} is ${userData[i].age} years old ${users[i]}`,
//   );
// }
// 2.(A) WHILE loops
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// array, object, function, class, contructor,

// 21st Oct 2026
// 1. Functions
// There are two types of functions(1. es5 function. 2. es6 funtion or arrow function)
// ES5 Function
function sum_two_nums(firstnum, secondnum) {
  //a parameterized function is the one that takes in parameter(s)[this function is one]
  console.log(firstnum + secondnum);
  // the plus is use to add two or more numbers together, it can also be used to concatenate two or more strings together
}
function log_pi() {
  //This is none parameterized function because it does not take in any parameter
  console.log(Math.PI);
}
log_pi(); //This is a function call, it is used to call a function
sum_two_nums(5, 200); //This is a function call, it is used to call a function(NAN not a number)
sum_two_nums("Oluwatayese", "Emmanuel"); //This is a function call, it is used to call a function(NAN not a number)

// ES6 Function
const sum_two_nums_arrow = (firstnum, secondnum) => {
  console.log(firstnum + secondnum);
};
const log_pi_arrow = (pi) => console.log(pi);
log_pi_arrow(Math.PI);
sum_two_nums_arrow(5, 200);
sum_two_nums_arrow("Oluwatayese", "Emmanuel");

// 22nd Oct 2026
// 2. Arrays
const cars = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Volkswagen",
  "Kia",
  "Hyundai",
];
cars.push("Tesla"); //This is used to add an item to the end of an array
cars.push("Lexus");
console.log(cars);
console.log(cars.length); //This is used to get the length of an array
cars.pop(); //This is used to remove the last item from an array
console.log(cars);
console.log(cars.indexOf("Mazda")); //This is used to get the index of an item in an array
cars.splice(2, 1); //This is used to remove an item from an array, the first parameter is the index of the item to be removed, the second parameter is the number of items to be removed
console.log(cars);
cars.shift(); //This is used to remove the first item from an array
console.log(cars);
cars.unshift("Xiaomi"); //This is used to add an item to the beginning of an array
console.log(cars);
//cars.sort(); //This is used to sort an array in ascending order
//console.log(cars);
//cars.reverse(); //This is used to sort an array in descending order
//console.log(cars);
// cars.slice(2, 5); //This is used to get a portion of an array, the first parameter is the index of the first item to be included, the second parameter is the index of the last item to be included
// console.log(cars.slice(2, 5));
//cars.filter(car => console.log(car)); //This is used to filter an array, the parameter is a callback function that returns a boolean value
console.log(
  cars.filter((car) => console.log(car === "Kia" || car === "Tesla")),
); //This is used to filter an array, the parameter is a callback function that returns a boolean value

// 23rd oct 2026
// Types of Arrays
// 1. Single Dimensional Array
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
console.log(fruits);
// 2. Multi Dimensional Array
const multiDimensionalArray = [
  ["Apple", "Banana", "Orange"],
  ["Mango", "Pineapple", "Grapes", ["Strawberry", "Blueberry", ["Raspberry", "Blackberry"]]],
];
console.log(multiDimensionalArray);

// Structure of arrays
// 1. Array of items
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
console.log("Array of items:", items);
// 2. Array of objects
const users = [
  { name: "Emmanuel", age: 25, gender: "Male" },
  { name: "John", age: 30, gender: "Male" },
  { name: "Mary", age: 28, gender: "Female" },
  { name: "Peter", age: 35, gender: "Male" },
  { name: "Paul", age: 40, gender: "Male" },
  { name: "Jane", age: 22, gender: "Female" },

];
console.log("Array of objects:", users);
console.log("User details:", users.map((user) => user.name));
const grade = {A: 90, B: 80, C: 70, D: 60, F: 50};
console.log("Grade thresholds:", grade);
console.log("Grade A threshold:", grade.B);

const userData = {
  name: "Emmanuel",
  age: 25,
  gender: "Male",
  idCard:["National ID", "Driver's License", "Voter's Card"],
}

// 26th Oct 2026
// Array Iteration Methods(forEach(), map(), filter(), find())
// 1. forEach() method
users.forEach((user) => { //Object literal(``) is used to access the properties of an object
  console.log(`Name: ${user.name}, Age: ${user.age}, Gender: ${user.gender}`);
});


