//This is my first JavaScript Code
// console.log("Hello World");

//variables
// let name = 'Sundar';
// name = "Raj";
// console.log(name);

// Primitive Value types 
// let name = 'Sundar';
// let age = 30;
// let isEligible = true;
// let firstName = undefined;
// let isSelected = null;

// Object declaration
// let person = {

//     name : "Sundar",
//     age : 30

// };
// console.log(person);

//Dot Notation to access objects
// person.age = 24;
// console.log(person.age);

//Bracket Notation to access objects
// person['age'] = 24;
// console.log(person['age']);

// arrays
// let array = ['name', 'age'];
// array[2] = 2;
// console.log(array.length);

// Functions

// Performing a Task
// function greet (firstName, lastName){

// Using Concatenation
//     console.log("Hello " + firstName + " " + lastName);

// Using backtick (Template String)
//    let name =  `Hello ${firstName} ${lastName}`; 
//    console.log(name.length);
//    console.log(name.toUpperCase());
//    console.log(name.toLowerCase());
//    console.log(name.substring(0,5).toUpperCase());
//    console.log(name.split(''));
// '' inside the function separates every single character

//    Using Split string can also be converted to an array
//     let words = `apple, bat, cat, dog, elephant, fish`;
//     console.log(words.split(', '));

// }

// greet("Sundar", "Raj");

// Calculating a Value
// function square (number){

//     return (number*number);

// }

// let squareNumber = square(10);

// console.log(square(9));

// Arrays
// const fruits = ['apples', 'oranges', 'grapes', 'watermelon', 'pomegranate'];
// fruits[5] = 'papaya';
//  fruits = []; (Cannot redefine a constant)

//To store the value in the last when the index is unknown
// fruits.push('mango');

//To store the value in the first
// fruits.unshift('strawberry');

// To delete the last element in an array
// fruits.pop();

// console.log(fruits);

// To check whether the given variable is an array
// console.log(Array.isArray('fruits'));

// To return the index of the desired element in an array 
// console.log(fruits.indexOf('grapes'));

// Specifically print the particular element
// console.log(fruits[0]);

// Objects
// An Object can contain any datatypes also arrays and objects also

// const person = {

//     firstName : 'Sundar',
//     middleName : 'Raj',
//     age : 24,
//     dob : '29/03/1998',
//     address : {

//         street : 'North Street',
//         town: 'Chinnathadagam',
//         city : 'Coimbatore',
//         zipcode: 641108

//     },

//     familyMembers : ['Ponnulingam', 'Sagunthaladevi']
    
// };

// console.log(person);

// can access the particular property in the object and also embedded object (the property inside the object property) in an object 
// also can access the array element inside the object

// console.log(person.familyMembers[1]);
// console.log(person.address.city);

// we can convert the property inside of an object into a variable
// let {firstName, middleName, address : {city}, familyMembers} = person;
// console.log(firstName);
// console.log(city);
// console.log(familyMembers[0]);

// One can directly add a property in an object
// person.email = 'sundarraj@usistech.com';
// console.log(person);

// Array of Objects

// const todos = [

//     {

//         id : 1,
//         taskName : 'Meeting',
//         isCompleted : true

//     },
//     {

//         id : 2,
//         taskName : 'Bug Fixing',
//         isCompleted : true

//     },
//     {

//         id : 3,
//         taskName : 'Deployment',
//         isCompleted : false

//     }

// ];

// console.log(todos);

// Accessing the property inside an array objects
// console.log(todos[1].taskName);

// Convert an Array to a JSON format
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// Loops

// For Loops
// for (let index = 0; index < 5; index++) {

//     console.log(`Array Index = ${index}`);
    
// }

// While
// let index = 1
// while (index <= 5) {
    
//     console.log(`Looping Index = ${index}`);
//     index++;

// }

// Looping through an array
// For Loop
// for (let index = 0; index < todos.length; index++) {
    
//     const element = todos[index];
//     console.log(element.taskName);
    
// }

// For-of Loop
// for (const iterator of todos) {
    
//     console.log(iterator);
//     To access separate properties
//     console.log(iterator.taskName);

// }

// High Order Array Methods - [forEach, Map, filter]

// Using forEach
// todos.forEach(function name(key) {

//     console.log(key.taskName);
    
// });

// Using Map (The Map method has a return type of an array )
// const result = todos.map(function name(key) {
    
//     return key.taskName

// });
// console.log(result);

// Using filter (The filter method returns the objects or elements of the array only if the condition given is satisfied)
// const result = todos.filter(function name(key) {

//     return key.isCompleted === true;
    
// });
// console.log(result);
// can integrate the map method to access the properties of the object which satisfies the given condition
// const result = todos.filter(function name(key) {

//     return key.isCompleted === true;
    
// }).map(function name(key) {

//     return key.taskName;
    
// })
// console.log(result);

// Statements - (if, else, else if Ladder )
const x = 5;
const y = 10;

if(x>5 && y<=10){

    console.log(`${x} is greater than 5 and ${y} is less than 10`);

}else if(x<=5 && y>10){

    console.log(`${x} is less than or equal to 5 and ${y} is greater than 10`);

}else if(x>5 && y>10){

    console.log(`${x} is greater than 5 and ${y} is greater than 10`);

}else if(x<5 && y<10){

    console.log(`${x} is less than 5 and ${y} is less than 10`);

}else{

    console.log(`Undetermined`);

}
