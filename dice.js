//võtame HTML failist endale elemendid
const rollButton = document.getElementById('rollButton');
const diceContainer = document.getElementById('diceContainer');

function rollDice(numDice) {
    diceContainer.innerHTML = ''; // Clear previous dice
    for (let i = 0; i < numDice; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const diceImage = document.createElement('img');
      diceImage.src = `taring_${randomNumber}.png`;
      diceImage.alt = `Dice face ${randomNumber}`;
      diceContainer.appendChild(diceImage);
    }
  }

  rollButton.addEventListener('click', () => {
    const numDice = parseInt(prompt('Mitut täringut sa soovid veeretada?'));
    if (isNaN(numDice) || numDice <= 0) {
      alert('Palun anna number, mis on suurem kui 0.');
    } else {
      rollDice(numDice);
    }
  });