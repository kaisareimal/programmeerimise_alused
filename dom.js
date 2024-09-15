/* DOM MANIPULATION */

console.log("Connected")

document.title = "DOM var2"
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"

const username = "Kaisa"
const welcomeMsg = document.getElementById("welcome-msg")

welcomeMsg.textContent += username === "" ? 'Guest' : username

console.dir(document)