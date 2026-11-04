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
// function sum_two_nums(firstnum, secondnum) {
//   //a parameterized function is the one that takes in parameter(s)[this function is one]
//   console.log(firstnum + secondnum);
//   // the plus is use to add two or more numbers together, it can also be used to concatenate two or more strings together
// }
// function log_pi() {
//   //This is none parameterized function because it does not take in any parameter
//   console.log(Math.PI);
// }
// log_pi(); //This is a function call, it is used to call a function
// sum_two_nums(5, 200); //This is a function call, it is used to call a function(NAN not a number)
// sum_two_nums("Oluwatayese", "Emmanuel"); //This is a function call, it is used to call a function(NAN not a number)

// // ES6 Function
// const sum_two_nums_arrow = (firstnum, secondnum) => {
//   console.log(firstnum + secondnum);
// };
// const log_pi_arrow = (pi) => console.log(pi);
// log_pi_arrow(Math.PI);
// sum_two_nums_arrow(5, 200);
// sum_two_nums_arrow("Oluwatayese", "Emmanuel");

// // 22nd Oct 2026
// // 2. Arrays
// const cars = [
//   "Toyota",
//   "Honda",
//   "Nissan",
//   "Mazda",
//   "Mercedes-Benz",
//   "BMW",
//   "Audi",
//   "Volkswagen",
//   "Kia",
//   "Hyundai",
// ];
// cars.push("Tesla"); //This is used to add an item to the end of an array
// cars.push("Lexus");
// console.log(cars);
// console.log(cars.length); //This is used to get the length of an array
// cars.pop(); //This is used to remove the last item from an array
// console.log(cars);
// console.log(cars.indexOf("Mazda")); //This is used to get the index of an item in an array
// cars.splice(2, 1); //This is used to remove an item from an array, the first parameter is the index of the item to be removed, the second parameter is the number of items to be removed
// console.log(cars);
// cars.shift(); //This is used to remove the first item from an array
// console.log(cars);
// cars.unshift("Xiaomi"); //This is used to add an item to the beginning of an array
// console.log(cars);
//cars.sort(); //This is used to sort an array in ascending order
//console.log(cars);
//cars.reverse(); //This is used to sort an array in descending order
//console.log(cars);
// cars.slice(2, 5); //This is used to get a portion of an array, the first parameter is the index of the first item to be included, the second parameter is the index of the last item to be included
// console.log(cars.slice(2, 5));
//cars.filter(car => console.log(car)); //This is used to filter an array, the parameter is a callback function that returns a boolean value
// console.log(
//   cars.filter((car) => console.log(car === "Kia" || car === "Tesla")),
// ); //This is used to filter an array, the parameter is a callback function that returns a boolean value

// // 23rd oct 2026
// // Types of Arrays
// // 1. Single Dimensional Array
// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
// console.log(fruits);
// // 2. Multi Dimensional Array
// const multiDimensionalArray = [
//   ["Apple", "Banana", "Orange"],
//   ["Mango", "Pineapple", "Grapes", ["Strawberry", "Blueberry", ["Raspberry", "Blackberry"]]],
// ];
// console.log(multiDimensionalArray);

// // Structure of arrays
// // 1. Array of items
// const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log("Array of items:", items);
// // 2. Array of objects
// const users = [
//   { name: "Emmanuel", age: 25, gender: "Male" },
//   { name: "John", age: 30, gender: "Male" },
//   { name: "Mary", age: 28, gender: "Female" },
//   { name: "Peter", age: 35, gender: "Male" },
//   { name: "Paul", age: 40, gender: "Male" },
//   { name: "Jane", age: 22, gender: "Female" },
//   { name: "John", age: 60, gender: "Male" },

// ];
// console.log("Array of objects:", users);
// console.log("User details:", users.map((user) => user.name));
// const grade = {A: 90, B: 80, C: 70, D: 60, F: 50};
// console.log("Grade thresholds:", grade);
// console.log("Grade A threshold:", grade.B);

// const userData = {
//   name: "Emmanuel",
//   age: 25,
//   gender: "Male",
//   idCard:["National ID", "Driver's License", "Voter's Card"],
// }

// 26th Oct 2026
// Array Iteration Methods(forEach(), map(), filter(), find())
// 1. forEach() method
// users.forEach((user) => { //String literal(``) is used to access the properties of an object
//   console.log(`Name: ${user.name}, Age: ${user.age}, Gender: ${user.gender}`);
// });

// 27th Oct 2026
// 2. map() method
// const userGenders = users.map((user)=> user.gender);
// console.log("User genders:", userGenders);
// // 3. filter() method
// const femaleUsers = users.filter((user) => user.name === "John");
// console.log("Female users:", femaleUsers);

// const foundUsers = users.filter((user) => user.name === "John");
// console.log("Found user:", foundUsers);
// // 4. find() method
// const userJohn = users.find((user) => user.name === "John");
// console.log("User John:", userJohn);

// 3. Objects
const student = {
  firstName: "Emmanuel",
  aggregateScore: 80,
  school: "Federal University of Technology, Akure",
}; // This is an object literal
const tools = {
  ironRod: "alloy steel",
  wire: "80mm",
  voltmeter: "digital",
  ameter: "digital",
}; // This is an object literal

// Dot notation
// console.log(person.firstName);
// console.log(person.aggregateScore);
// console.log(person.school);

// Bracket notation
// console.log(tools[`ironRod`]);
// console.log(tools["wire"]);
// console.log(tools["voltmeter"]);
// console.log(tools["ameter"]);

// 28th Oct 2026
// Adding new properties to an object
//1. Dot notation
student.department = "Computer Science"; // This is used to add a new property to an object
student.matriNumber = "FUTA/2026/12345";
student.level = "400L";
//single threaded language, it can only execute one command at a time, it is also synchronous in nature
console.log(student);
//2. Bracket notation
student["email"] = "emmanuel@futa.edu.ng";
student["blackbook"] = false; //boolean
student["age"] = 20;
student["subjects"] = ["MTS401", "CSC403", "EMT309"];
console.log(student);
// Deleting properties from an object
//1. Dot notation
// delete student.age;
console.log(student);
//2. Bracket notation
delete student["blackbook"];
console.log(student);

// const car = {};
// car.name = "Toyota";
// car.model = "Camry";
// car.year = 2020;
// console.log(car)
// console.log(typeof car) //object

// 29th Oct 2026
// Object methods
// student.greet = function () {
//   console.log(
//     `Hello, my name is ${this.firstName}, I'm a student of ${this.school} studying ${this.department} with the following subjects: ${this.subjects.join(", ")}. My matric number is ${this.matriNumber} and I'm currently in ${this.level} and finally I'm ${this.age} years old`,
//   );
// };
// student.greet(); // Output: Hello, my name is Emmanuel
// console.log(student);

// // object key methods
// const personKeys = Object.keys(student); // This is used to get the keys of an object
// console.log("Person keys:", personKeys);

// Nested objects and arrays of objects
const university = {
  name: "Federal University of Technology, Akure",
  location: {
    city: "Akure",
    state: "Ondo",
    country: {
      name: "Nigeria",
      countrycode: "NG",
      continent: "Africa",
      currency: "Naira",
      phonecode: "+234",
    },
  },

  departments: [
    {
      name: "Computer Science",
      head: "Dr. Smith",
    },
    {
      name: "Mathematics",
      head: "Prof. Johnson",
    },
  ],
};

// console.log(university);
// console.log(university.location.country.name);
// university.departments.forEach((dept) =>
//   console.log(`Department: ${dept.name}, Head: ${dept.head}`),
// );

// 4th Nov 2026
// Destructuring (This is used to extract values from an object or an array and assign them to variables)
//1. Object destructuring
const users = [
  { id: 1, name: "Alice", role: "registrar", email: "alice@futa.edu.ng" },
  { id: 2, name: "Bob", role: "student", email: "bob@futa.edu.ng" },
  { id: 3, name: "Charlie", role: "student", email: "charlie@futa.edu.ng" },
];
console.log(users);
const userProfiles = users[0];
console.log(userProfiles);
const { id, name, role, email } = userProfiles;
console.log(`ID: ${id}, Name: ${name}, Role: ${role}, Email: ${email}`);

// 2. Array destructuring
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(
  `First Fruit: ${firstFruit}, Second Fruit: ${secondFruit}, Third Fruit: ${thirdFruit}`,
);

// 3. Nested destructuring
console.log(university);
const {
  name: uniName,
  location: {
    city,
    state,
    country: { continent, currency, phonecode, countrycode, name: countryName },
  },
  departments: [
    { name: dept1Name, head: dept1Head },
    { name: dept2Name, head: dept2Head },
  ],
} = university;
console.log(
  uniName,
  city,
  state,
  continent,
  currency,
  phonecode,
  countrycode,
  countryName,
  dept1Name,
  dept1Head,
  dept2Name,
  dept2Head,
);

console.log(
  university.name,
  university.location.city,
  university.location.state,
  university.location.country.name,
  university.location.country.countrycode,
  university.location.country.continent,
  university.location.country.currency,
  university.location.country.phonecode,
  university.departments[0].name,
  university.departments[0].head,
  university.departments[1].name,
  university.departments[1].head,
);
