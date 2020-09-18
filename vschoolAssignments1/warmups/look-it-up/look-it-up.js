const readline = require("readline-sync")

const options = ["Insert Word and Definition", "Look Up Word"]

const dictionary = {

}



const whatToDo = () => {
    let whatAreOptions = readline.keyInSelect(options, "What do you want to do?")

    if (whatAreOptions === 0) {
        console.log("Option One")
    } else if (whatAreOptions === 1) {
        console.log("Option Two")
    } else {
        console.log("Cancel")
    }
}

const addWord = () => {

}

const lookUpWord = () => {

}


whatToDo()