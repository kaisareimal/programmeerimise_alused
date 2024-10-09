const resto_menu = [
  { Nimi: "Tomatisupp", Hind: 3.5, Kategooria: "Supid" },
  { Nimi: "Kreemine kõrvitsasupp", Hind: 4.0, Kategooria: "Supid" },
  { Nimi: "Borš", Hind: 2.5, Kategooria: "Supid" },
  { Nimi: "Talupoja supp", Hind: 2.5, Kategooria: "Supid" },

  { Nimi: "Sealiha šnitsel kartulitega", Hind: 18.5, Kategooria: "Pearoad" },
  {
    Nimi: "Kanapasta päikesekuivatatud tomatitega",
    Hind: 12.0,
    Kategooria: "Pearoad",
  },
  {
    Nimi: "Paneeritud kohafilee aurutatud köögiviljadega",
    Hind: 18.0,
    Kategooria: "Pearoad",
  },
  {
    Nimi: "Friteeritud suvikõrvits teriyaki paneeringus",
    Hind: 12.0,
    Kategooria: "Pearoad",
  },

  {
    Nimi: "Friikartulid kananaggitsatega",
    Hind: 8.0,
    Kategooria: "Lastemenüü",
  },
  {
    Nimi: "Makaroni-juustuvorm",
    Hind: 10.0,
    Kategooria: "Lastemenüü",
  },
  {
    Nimi: "Kartulipuder viineritega",
    Hind: 11.5,
    Kategooria: "Lastemenüü",
  },

  { Nimi: "Juustukook jõhvikamoosiga", Hind: 3.0, Kategooria: "Magustoit" },
  {
    Nimi: "Jäätisekokteil (mahl omal valikul)",
    Hind: 5.0,
    Kategooria: "Magustoit",
  },
  {
    Nimi: "Friteeritud banaanid jäätisega",
    Hind: 5.5,
    Kategooria: "Magustoit",
  },
  { Nimi: "Mustikapannkoogid meega", Hind: 3.5, Kategooria: "Magustoit" },
];

function analyzeMenu(menu) {
  //filter meetodiga leia kõik, mille hind on alla 10 euro
  const odavHind = menu.filter((toit) => toit.Hind < 10);

  //map meetodiga loo uus massiiv, kus on ainult odavad tooted
  const odavadNimed = odavHind.map((toit) => toit.Nimi);

  //forEach meetodiga iga odava toidu nime ja hinna välja võtmine
  odavHind.forEach((toit) => {
    console.log(`Nimi: ${toit.Nimi}, Hind: ${toit.Hind} €`);
  });

  //reduce meetodiga leida kõigi odavate toodete kogusumma
  const odavateKogusumma = odavHind.reduce(
    (total, toit) => total + toit.Hind,
    0
  );

  const tableData = odavHind.map((toit) => ({
    Nimi: toit.Nimi,
    Hind: toit.Hind,
  }));

  //Tagastab tulemuse
  return {
    tableData,
    odavateKogusumma,
  };
}

const tulemus = analyzeMenu(resto_menu);
const massiivOdavad = tulemus.odavHind;

console.log("Odavad tooted massiivis:", massiivOdavad);
console.log("Kogusumma: ", tulemus.odavateKogusumma, "€");

//lisab tulemuse HTML tabelisse id'ga "resultTable"
const resultTable = document.getElementById("tulemuseTabel");
const tableBody = resultTable.querySelector("tbody");

tulemus.tableData.forEach((toit) => {
  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  const priceCell = document.createElement("td");

  nameCell.textContent = toit.Nimi;
  priceCell.textContent = toit.Hind + "€";

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  tableBody.appendChild(newRow);
});
