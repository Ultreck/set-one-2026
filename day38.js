// console.log('My name is Emmanuel');


// Conditionals
let score = 75;
// if
if (score >= 70) {
    console.log('Help me buy rice');
};
// else
if (score >= 60) {
    console.log('Help me buy rice');
} else {
    console.log('Help me buy beans');
}
// else if
if (score >= 40 && score < 50) {
    console.log('Help me buy rice');
} else if (score >= 50 && score < 60) {
    console.log('Help me buy beans');
} else if (score >= 60 && score < 70) {
    console.log('Help me buy yam');
} else if (score >= 70 && score <= 100) {
    console.log('Help me buy Yogurt');
} else {
    console.log('Something is wrong with your score, score should be between 0 and 100');
};

// Ternary operator
let age = 18;
let gender = 'others';
let isAdult = (age >= 18) ? 'You are an adult' : 'You are not an adult';
let isGreetings = (gender === 'male') ? 'You are welcome Mr. ...' : (gender === 'female') ? 'You are welcome Ms. ...' : 'You are welcome Sir/Madam ...';
console.log(isAdult);
console.log(isGreetings);

// Switch statement
let today = 'Friday';
switch (today) {
    case 'Monday':
        console.log('It is Monday');
        break;
    case 'Tuesday':
        console.log('It is Tuesday');
        break;
    case 'Wednesday':
        console.log('It is Wednesday');
        break;
    default:
        console.log('It is not a weekday');
}