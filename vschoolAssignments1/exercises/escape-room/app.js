const readline = require("readline-sync")

const options = ["Put Hand in Hole", "Open the Door", "Find the Key"]

const optionsTwo = ["Put Hand in Hole", "Open the Door"]

let prompt = readline.keyInSelect(options, "What do you want to do?")

let haveKey = false

let alive = true


while (alive) {
    
switch (prompt) {
    case 0:
        console.log("You have died...")
        alive = false
        break;
    
        case 1: 
            if (haveKey === false) {
                console.log("It is locked...")
        
                    prompt = readline.keyInSelect(options, "What do you want to do?")
                    break;
            } else if (haveKey === true) {
                console.log("You escaped!!")
                alive = false
                break;
            }
            
            break;
    case 2:
        if (haveKey === false) {
            haveKey = true
            console.log("You have found a key.")
            prompt = readline.keyInSelect(optionsTwo, "What do you want to do now?")
            break;
        } 
}

}