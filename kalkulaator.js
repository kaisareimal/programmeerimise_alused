const x = Number(prompt("Anna mulle üks number"));
const y = Number(prompt("Anna mulle veeel üks :)"));
const op = prompt(
  "Mis sa nende numbritega teha tahad? (Sisendid: p = liitmine, l = lahutamine, k = korrutamine ja j = jagamine. Boonusena on a = astendamine ja r = protsendi arvutamine.)"
);

switch (op) {
  case "p":
    document.write(x + " + " + y + " = " + (x + y));
    break;
  case "l":
    document.write(x + " - " + y + " = " + (x - y));
    break;
  case "k":
    document.write(x + " * " + y + " = " + x * y);
    break;
  case "j":
    document.write(x + " / " + y + " = " + x / y);
    break;
  case "a":
    document.write(x + " ** " + y + " = " + x ** y);
    break;
  case "r":
    document.write(x + " % " + y + " = " + (x % y));
    break;
  default:
    document.write("Ei saa aru, mida sa minust tahad.");
}
