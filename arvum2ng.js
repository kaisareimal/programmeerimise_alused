//Genereerib suvalise numbri ja ümardab alla
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Põhiline funktsioon
const min = 1;
const max = 20;
let randomNumber = generateRandomNumber(min, max);
let proovidMax = 5;
let proovidJärel = proovidMax;

while (proovidJärel > 0) {
  const kasutajaNumber = Number(
    prompt("Arva ära, mis numbrile ma mõtlen 1 kuni 20!")
  );

  //kontrolli sobivust
  if (!kasutajaNumber || kasutajaNumber < 1 || kasutajaNumber > 20) {
    alert(
      "Andsid sisendi, mis on skaalalt väljas! Sul on " +
        proovidJärel +
        " arvamist jäänud."
    );
    console.log(randomNumber);
  } else if (kasutajaNumber == randomNumber) {
    alert(
      "JEE! Mõtlesime samast numbrist! Mäng sai läbi! Õige number oligi " +
        randomNumber +
        ". Sul läks arvamiseks " +
        (proovidMax - proovidJärel + 1) +
        " katset."
    );
    break;
  } else {
    proovidJärel--;
    alert(
      "Oi oi, me ei mõelnud samast arvust! Sul on " +
        proovidJärel +
        " arvamist jäänud."
    );
    console.log(randomNumber);
  }

  if (proovidJärel === 0) {
    alert("Katsed said otsa! Õige number oli " + randomNumber + ".");
  }
}
