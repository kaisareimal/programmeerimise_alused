//spread operator ... jagab array laiali, et saaks võtta isa array osa eraldiseisvana

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let max = Math.max(...numbers); //maksimaalse arvu leidmine spread operatori funktsiooniga
console.log(max);

let min = Math.min(...numbers); //minimaalse arvu leidmine spread operatori funktsiooniga
console.log(min);

let username = "Kaisa Reimal";
let letters = [...username]; //teeb kõik tähemärgid eraldi objektideks
console.log(letters);

let lettersdash = [...username].join("-"); //lisab kõigi tähemärkide järele sidekriipsu
console.log(lettersdash);

let fruits = ["apple", "orange", "banana", "coconut"];
console.log(fruits);

//fruits.sort().reverse(); sordib tagurpidi, ilma .reverse() sordib tähestiku järjekorras

//annab asjad igaühe eri objektina
for (let fruit of fruits) {
  console.log(fruit);
}

let newfruits = [...fruits];
console.log(newfruits);

let vegetables = ["potatoes", "carrots", "celery"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);

//rest parameter = (...rest) paneb erinevad asjad üheks arrayks kokku
//lisad funktsiooni parameetri kohale konstanti nime
function openFridge(...foodsies) {
  console.log(...foodsies);
}
function getFood(...foodsies) {
  return foodsies;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "sushi";
const food4 = "hotdog";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foodsies = getFood(food1, food2, food3, food4, food5);
console.log(foodsies);

function sum(...numbers2) {
  let result = 0;
  for (let number of numbers2) {
    result += number; //annab summa
  }
  return result;
}
const summa = sum(1, 2, 3, 4, 5);

function getAverage(...numbers2) {
  let result = 0;
  for (let number of numbers2) {
    result += number;
  }
  return result / numbers2.length; //arvutab keskmise
}
const total = getAverage(75, 100, 85, 98, 50);

console.log("Your total is " + total + " and your sum is " + summa);

//this = reference to the object where THIS is used
// () => arrow function kasutab window objecteid, ei saa kasutada this.name objektiga

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  favFood: "hamburgers",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi! I am ${this.firstName}`);
  },
  eat: () => console.log("I'm eating a Krabby Patty! "),
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hi! I'm ${this.firstName}...`);
  },
  eat: () => console.log("I'm eating a roast beef, chicken and pizza!"),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

//constructor

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.make} ${this.model}`);
  };
}

const car1 = new Car("BMW", "X5", "2008", "black");
const car2 = new Car("Audi", "S4", "1994", "green");
const car3 = new Car("Volkswagen", "Beetle", "1987", "yelow");

console.log(car1.make);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();
