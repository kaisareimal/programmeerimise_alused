//callback
//kasutatakse muutuva pikkusega või asünkroonsete funktsioonide puhul, et teised funktsioonid ei tuleks ennem kui see, mida sina esimesena tahaksid

hello(leave);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}

//tehte tegemine ja siis tulemuse callbackimine

sum(displayPage, 2, 1);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

//Funktsioon, mis ütleb kõigile listis olevatele inimestele tere

function tervita(name) {
  console.log("Hello, " + name + "!");
}

function tervitaK6iki(names, callback) {
  for (let name of names) {
    callback(name);
  }
}

const names = ["Alice", "Bob", "Charlie"];
tervitaK6iki(names, tervita);

//foreach - kasutatakse arrayga
//array.forEach(callback (element, index, array)

//numbrite mudimine

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function cube(element, index, array) {
  array[index] = Math.pow(element, 3);
}

function display(element) {
  console.log(element);
}

//teksti manipuleerimine

let fruits = ["õun", "banaan", "apelsin", "kurk"];

fruits.forEach(capitalize);
fruits.forEach(display2);

//kõik tähed suureks

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function display2(element) {
  console.log(element);
}

//esitähed suureks
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
