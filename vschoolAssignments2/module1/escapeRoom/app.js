const readline = require('readline-sync')
let gameRunning = true
console.log("You have found yourself locked in a room. You need to escape in order to survive.")
let haveKey = false
const options = ["Put Hand in Hole", "Find the Key", "Open the Door"]

while (gameRunning) {
    let actionIndex = readline.keyInSelect(options, "What do you want to do?")
    if (actionIndex === 0) {
        console.log("You Die.")
        gameRunning = false
    } else if (actionIndex === 1 && !haveKey) {
        console.log("You find the key.")
        haveKey = true
    } else if (actionIndex === 1 && haveKey) {
        console.log("You have already found the key.")
    } else if (actionIndex === 2 && !haveKey) {
        console.log("The door is locked.")
    } else if (actionIndex === 2 && haveKey) {
        console.log("You have escaped!!")
        gameRunning = false
    } else if (actionIndex === -1) {
        gameRunning = false
    }
}