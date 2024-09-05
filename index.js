// Comment elloello govna
console.log("Hello World");

//VARIABLES
let name = "Mosh";
console.log(name);

//Name cannot be a reserved keyword
//Name should be meaningful
//Can't start with a number (1name)
//Cannot contain a space or a hyphen (-)
//Case sensitive//

let firstName = "Mosh";
let lastName = "Hamedani";

//Last value given is the one logged
//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//By default use const, let only when you KNOW you need to change the value at some point

let name2 = "Mosh"; //String literal
let age = 30; //Number literal
let isApproved = true; //Boolean literal can be true or false
let firstName2; //undefined
let selectedColor = null; //explicitly make the selection empty, clear the value of a variable

//reference types

//giving properties to an object
let person = {
  name: "Kaisa",
  age: 29,
};

//dot notation (cleaner and easier)
person.name = "Jeebus";

//bracket notation
let selection = "name";
person[selection] = "Hiibahoobahee";

console.log(person.name);

//array
let selectedColors = ["red", "blue"];
selectedColors[2] = 245;
console.log(selectedColors.length);

//Function (is preforming a task)
//name is a parameter
function greet(name4, lastName4) {
  console.log("Heljouu " + name4 + " " + lastName4);
}
//What you give to the function is an argument
greet("Blobby", "Kliibo");

//calculating value
function square(number) {
  return number * number;
}

console.log(square(2));

//if-statement

if (true) {
  console.log("execute");
}

// let yourAge=12
// if(yourAge > 18) {
//     console.log("You are an adult!")
// }

let country = "India";
let yourAge = 16;

if (yourAge >= 18 && country == "India") {
  console.log("Hellomelloyellojello");
}

//if-else statement
//moves on step-by-step, if first is right - stops, if not - moves to second
if (yourAge >= 18) {
  console.log("Adulting");
} else if (yourAge >= 16) {
  console.log("Ooo mid tier");
} else {
  console.log("Youngin'");
}

//Switch

//Conditional statement, based on cases, checks cases, breaks, moves on.
//Default is "else"

//Example switch 1

let value = 42;

switch (typeof value) {
  case "number":
    console.log("Number");
    break;

  case "string":
    console.log("G-string");
    break;

  case "boolean":
    console.log("BOOLEAAAAAN");
    break;

  default:
    console.log("Other");
    break;
}

//Example switch 2

let dayName = 4;

switch (dayName) {
  case 1:
    dayName = "SUN";
    break;
  case 2:
    dayName = "MON";
    break;
  case 3:
    dayName = "TUE";
    break;
  case 4:
    dayName = "WED";
    break;
  case 5:
    dayName = "THU";
    break;
  case 6:
    dayName = "FRI";
    break;
  case 7:
    dayName = "SAT";
    break;
  default:
    dayName = "Invalid";
    break;
}
console.log("The day is: " + dayName);

//Ternary Operator

//Syntax
//condition ? value_if_true : value_if_false

let age7 = 20;

let msg = age7 >= 18 ? "You are a very cute person" : "You are yucky!";

console.log(msg);

//LOOPS (carousels, icon animations)

for (let i = 1; i <= 10; i++) {
  //code to be repeated
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //code to be repeated
  console.log("Cheese");
}

let coding = ["JavaScript", "Python", "CPP"];

for (let i = 0; i < coding.length; i++) {
  console.log(coding[i]);
}

//Inner loop

for (let i = 1; i <= 5; i++) {
  console.log(i);

  for (let j = 1; j <= i; j++) console.log("Inner loop" + j);
}

//WHILE syntax
// while (condition) {
//     //code to be repeated
// }

let i = 0;
while (i <= 28) {
  console.log(i);
  i++;
}


// //do...while loop
// do {
//     //code to be repeated
// }while(condition);

let u = 10
do {
console.log(u)
u++
}while(u<=5)

//break vs continue
for(let i= 1; i <= 5; i++) {
    if(i==3){
        break
    }
    console.log(i)
} 

for(let i= 1; i <= 5; i++) {
    if(i==3){
        continue
    }
    console.log(i)
}

//Mapping

//example 1 - kogu nimekirja korrutamine ühe arvuga
const array1 = [2, 4, 12, 25];

// Pass a function to map
const map1 = array1.map((x) => x * 1.5);
console.log(map1);


//example 2 - stringile sama lõpu lisamine
const array2 = ["õun", "porgand", "emis", "oeh"];

const map2 = array2.map((x) => x + "iin");
console.log(map2);


//string replace

const paragraph = "Mina tahan väga süüa sushit!";

console.log(paragraph.replace("tahan väga", 'kavatsen'));
// Expected output: "Mina kavatsen süüa sushit!"

const regex = /väga/i;
console.log(paragraph.replace(regex, 'täna'));
// Expected output: "Mina tahan täna süüa sushit!"


//pop - võtab lõpust
//slice - lõikab määratud vahemiku


const asjadkorvis = ['lehvik', 'hommikumantel', 'kapsas', '2 kilu', 'hari'];
let alles = asjadkorvis.slice(0,4);

let alles2 = alles.pop()
console.log(alles2)

