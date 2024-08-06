// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
nums.map(num =>num*2);

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstPizza, secondPizza] = pizzaToppings;

console.log(firstPizza); 
console.log(secondPizza);

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };

  
  
  // Your code here
const { make, model } = car;

console.log(make);
console.log(model); 



const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]


const controversialPizzaToppings =[...pizzaToppings];

console.log(controversialPizzaToppings)


const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  const clonedObject = { ...originalObject };
  console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

const myCar = {...car}

myCar.model='rs6'

console.log(myCar);

const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2

  // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
let userProfile = {
  
  };

const propertyName = "username"
userProfile={
    [propertyName]:"ali"
};

console.log(userProfile);


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const func =(first='cat', last='white') =>{
    console.log(`the ${first} is ${last}`)
}

func('dog');

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
pizza==='tasty'?console.log('yum'):console.log('yuck');

const localLangConfig = "fr"; // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'ar';  



console.log('Language setting:', LANG);



const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);







//  Exercise 11: Optional chaining
 // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
 
 const adventurer = {
   name: 'Alice',
 };
 // Your code here
 let cat = adventurer.age?.name; 
 
 console.log(cat);

