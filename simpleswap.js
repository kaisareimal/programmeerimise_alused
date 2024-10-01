let a = prompt("Anna üks number/sõna, palun!");
let b = prompt("Anna siis juba teine number/sõna ka!");

console.log("Sina andsid mulle sisendiks " + a + " (a) ja " + b + " (b)");

const temp = a;
a = b;
b = temp;
console.log(
  "Nüüd on nad JavaScriptis hoopis sellises järjekorras " +
    a +
    " (a) ja " +
    b +
    " (b)"
);
