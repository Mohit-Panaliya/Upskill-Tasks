// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
const numbers = [1,4,8,7,9]
const sqrt = numbers.map(num => num ** 2);
console.log(sqrt);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..


function getgrade(grade) { return grade >= 90 ? 'A' : grade >=80 ? 'B' : grade >=70 ? 'C' : grade >=60 ? 'D' : 'F'};
console.log("Grade of student is " + getgrade(65)) 

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
    company: "Toyota",
    model: "Fortuner",
    year: 2024
};
function changeyear(newyear){

    car.year = newyear;
}
changeyear(2023);
console.log(`Year of Car ${car.year}`);
 const {model , year} = car;
console.log(
    `cars model is ${model} and year is ${year}`
);

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primeNum(num){
    if (num <= 1)
        return false;
    for (let i = 2; i<=Math.sqrt(num);i++)
    {
        if (num%i===0)
            return false;
    }
    return true;
}
const primeNumber =numbersArray.filter(primeNum);
console.log(`Prime Numbers are ${primeNumber}`);

// Q5 -  State different use cases of map, filter and reduce functions

// Map: Transforming an array (e.g., squaring numbers, converting strings to uppercase).To do operation on whole array

const snumbers = [1, 2, 3, 4, 5, 6];
const doubleNumber = snumbers.map(num => num * 2);
console.log("doubled number are "+doubleNumber); 
// Filter: Selecting a subset of an array (e.g., filtering out odd numbers, finding users above a certain age). selecting desire by filtering with logic
const oddNumber = snumbers.filter(num => num % 2 !== 0);
console.log("Od  Numbers are "+oddNumber);
// Reduce: Aggregating data (e.g., summing values in an array, flattening an array of arrays). to reduce the array into single digit with some operation.
const sum = snumbers.reduce((a, b) => a + b, 0);
console.log("sum of an array is "+sum); 


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

async function fetchData() {
    try{
    const response = await fetch('https://api.restful-api.dev/objects/');
    const data = await response.json();
    console.log(data);
    }
    catch(error)
    {
        console.log("Error While Fetching the Data "+ error)
    }
}


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    contact: {
        email: "john@example.com"
        // phone is missing
    }
};

const phoneNumber = person.contact?.phone; 
console.log(phoneNumber); // undefined