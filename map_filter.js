//map loob uue array
//array järjekorra muutmine ja sellest UUE ARRAY LOOMINE

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formtDates = dates.map(formatDates); // Call formatDates with parentheses

console.log(formtDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//filter() loob uue array välja filterdatud elementidest

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log(evenNums);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

//saab kontrollida, kas on laps või täiskasvanu

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element) {
  return element >= 18;
}
function isChild(element) {
  return element < 18;
}

//saab konntrollida sõnade pikkust mingi parameetri suhtes

const fruits = ["apple", "banana", "coconut", "pomegranate", "aaaapiiii"];
const shortWords = fruits.filter(getShortWords);
const longWords = fruits.filter(getLongWorlds);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWorlds(element) {
  return element.length > 6;
}

//.reduce() reduces the elements in an array to a single value (annab väljundiks ainult ühe vastuse kogu arrayst)

//hindade kokku arvutamine
const prices = [5.2, 30.15, 10.6, 25.5, 15.28, 20];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, next) {
  return accumulator + next;
}

//kõige väiksema ja suurema väärtuse leidmine arrayst
const grades = [75, 50, 90, 80, 65, 95, 15, 2, 16, 18];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(accumulator, next) {
  return Math.max(accumulator, next);
}

function getMin(accumulator, next) {
  return Math.min(accumulator, next);
}
