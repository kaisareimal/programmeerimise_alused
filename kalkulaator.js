const x = Number(prompt("Anna mulle üks number"));
const y = Number(prompt("Anna mulle veeel üks :)"));
const op = prompt(
  "Mis sa nende numbritega teha tahad? (Sisendid: p = liitmine, l = lahutamine, k = korrutamine ja j = jagamine. Boonusena on a = astendamine ja r = jäägi leidmine peale nende kahe arvu jagamist.)"
);

switch (op) {
  case "p":
    document.write(x + " pluss " + y + " võrdub " + (x + y));
    break;
  case "l":
    document.write(x + " miinus " + y + " võrdub " + (x - y));
    break;
  case "k":
    document.write(x + " korda " + y + " võrdub " + x * y);
    break;
  case "j":
    document.write(x + " jagatud " + y + " võrdub " + x / y);
    break;
  case "a":
    document.write(x + " astmes " + y + " võrdub " + x ** y);
    break;
  case "r":
    document.write(
      "Jääk peale " +
        x +
        " ja " +
        y +
        " jagamist on " +
        (x % y) +
        ", sest lähim arv, mis jaguneb " +
        y +
        "ga on " +
        (x - (x % y))
    );
    break;
  default:
    document.write("Ei saa aru, mida sa minust tahad.");
}
