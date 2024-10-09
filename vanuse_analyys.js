const users = [
  { name: "John", age: 12 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Jane", age: 15 },
  { name: "Tom", age: 40 },
  { name: "Sara", age: 29 },
];

//filtreeri kasutajad, kes on vanemad kui 25
const usersOver25 = users.filter((user) => user.age > 25);
console.log(usersOver25);

//lisab täiskasvanutele isAdult omaduse
const usersWithIsAdult = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(usersWithIsAdult);

//kasutab forEach, et kuvada iga kasutaja nime ja isAdult välja
usersWithIsAdult.forEach((user) => {
  console.log(
    `Kasutaja ${user.name} on ${user.isAdult ? "täiskasvanu" : "alaealine"}`
  );
});

//kasutajad, kes on vanemad kui 25 (jälle)
function isOlderThan25(user) {
  return user.age > 25;
}

const usersOver25vol2 = users.filter(isOlderThan25);
console.log(usersOver25);

//lisab täiskasvanutele isChild omaduse
const addIsChild = (user) => {
  return {
    ...user,
    isChild: user.age < 18,
  };
};
const usersWithIsChild = users.map(addIsChild);

//nime ja täiskasvanu staatuse kuvamine
const logUser = (user) => {
  console.log(
    `Kasutaja ${user.name} on ${user.isChild ? "alaealine" : "täiskasvanu"}.`
  );
};
usersWithIsChild.forEach(logUser);

//HTML'i info kuvamine
const userTable = document.getElementById("userTable");
usersWithIsAdult.forEach((user) => {
  const row = document.createElement("tr");
  row.id = user.name;

  const nameCell = document.createElement("td");
  nameCell.textContent = user.name;
  row.appendChild(nameCell);

  const ageCell = document.createElement("td");
  ageCell.textContent = user.age;
  row.appendChild(ageCell);

  userTable.appendChild(row);

  row.addEventListener("click", () => {
    alert(
      `Kasutaja ${user.name} on ${user.isAdult ? "täisealine" : "alaealine"}`
    );
  });
});
