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
let users = ["Emmanuel", "John", "Mary", "Peter", "Paul"]; //array of items
let userData = [
  { name: "Emmanuel", age: 25 },
  { name: "John", age: 30 },
  { name: "Mary", age: 28 },
  { name: "Peter", age: 35 },
  { name: "Paul", age: 40 },
]; //array of objects
// 1. FOR loops
for (let i = userData.length - 1; i >= 0; i--) {
  console.log(
    `${userData[i].name} is ${userData[i].age} years old ${users[i]}`,
  );
}
// 2.(A) WHILE loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// array, object, function, class, contructor, 

// 21st Oct 2026
// 1. Functions
// There are two types of functions(1. es5 function. 2. es6 funtion or arrow function)
// ES5 Function
function sum_two_nums(firnum, secondnum){}