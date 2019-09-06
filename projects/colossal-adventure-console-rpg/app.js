const readlineSync = require("readline-sync")

let alive = true

const player = {
    healthMax: 50,
    currentHealth: 50,
    attackMax:10,
}


/////////////////////////////
//Arrays//
/////////////////////////////

const classOptions = ["Fighter", "Rogue", "Sorceror", "Cleric"]
const enemies = [
    {
        type: "wolf",
        drop: "pelt",
        healthMax: 10,
        currentHealth: 10,
        attackMax: 10
    },
    {
        type: "boar",
        drop: "tusk",
        healthMax: 6,
        currentHealth: 6,
        attackMax: 6
    },
    {
        type: "stag",
        drop: "antler",
        healthMax: 8,
        currentHealth: 8,
        attackMax: 8
    },
    {
        type: "butterfly",
        drop: "wing",
        healthMax: 4,
        currentHealth: 4,
        attackMax: 4
    }
]
const inventory = []
const fightOrRunArr = ["Fight", "Run", "Check Stats"]
const randomEvent = ["Go Into Town", "Treasure Chest"]
const townChoices = ["Go to the Tavern"]
const twoOptions = ["Bigger and More Expensive", "Smaller and Cheeper"]

/////////////////////////////
//Functions//
/////////////////////////////


let playerHPResult = (enemyAttack, player) => {
console.log(`
`)
console.log(`Initial Player Life = ${player.currentHealth}`)
console.log(`Attack = ${enemyAttack}`)
player.currentHealth = player.currentHealth - enemyAttack
console.log(`Current Player Life = ${player.currentHealth}`)    
}
let enemyHPResult = (currentEnemy, attackLevel) => {
console.log(`
`)
console.log(`Initial Enemy Life = ${currentEnemy.currentHealth}`)
currentEnemy.currentHealth = currentEnemy.currentHealth - attackLevel
console.log(`Attack = ${attackLevel}`)
console.log(`Current Enemy Life = ${currentEnemy.currentHealth}
`)
}
let stats = () => {
    console.log(`
Name: ${username}
Class: ${classOptions[playerClass]}
Max Health: ${player.healthMax}
Current Health: ${player.currentHealth}
Inventory: ${inventory}
`)
}

let enemyDecider = () => {
    min = 1
    max = enemies.length

    let enemyChoice = Math.floor(Math.random() * max)
    return enemies[enemyChoice]
}
const whatToDo = () => {
    readlineSync.keyIn("Press 'w' to walk", {limit: 'w'})
}
let walk = () => {
    min = 1
    max = 7

    let enemyChance = Math.floor((Math.random() * max) + 1)

    if (enemyChance === 1 || enemyChance === 5 || enemyChance === 6) {
        let currentEnemy = enemyDecider()
        currentEnemy.currentHealth = currentEnemy.healthMax
        console.log(`You run into a ${currentEnemy.type}.`)

        let battle = true
        while (battle) {
            const fightOrRunDecision = readlineSync.keyInSelect(fightOrRunArr, "What do you want to do?")
            if (fightOrRunArr[fightOrRunDecision] === "Fight") {
                console.log("You decide to fight!")
                
                max = player.attackMax
                let attackLevel = Math.floor(Math.random() * (max - min) + min)
                
                enemyHPResult(currentEnemy, attackLevel)


                    if (currentEnemy.currentHealth <= 0) {
                        console.log(`${currentEnemy.type} dies.`)

                        inventory.push(currentEnemy.drop)
                        
                        battle = false
                    } else if (currentEnemy.currentHealth > 0) {
                        console.log("They attack you.")

                        max = currentEnemy.attackMax
                        let enemyAttack = Math.floor((Math.random() * max) + 1)

                        playerHPResult(enemyAttack, player)

                        if (player.currentHealth <= 0) {
                            console.log("You have died.")
                            battle = false
                            alive = false
                        }
                    }
            } else if (fightOrRunArr[fightOrRunDecision] === "Run") {
                min = 1
                max = 2

                let runLevel = Math.floor((Math.random() * max) + 1)
                    if (runLevel === 1) {
                        console.log("You Escape!!")
                        battle = false
                    } else if (runLevel === 2) {
                        console.log("You Don't Escape...")
                        max = currentEnemy.attackMax

                        let enemyAttack = Math.floor((Math.random() * max) + 1)

                        playerHPResult(enemyAttack, player)

                            if (player.currentHealth <= 0) {
                                console.log("You have died.")
                                battle = false
                                alive = false
                            }
                    }
            } else if (fightOrRunArr[fightOrRunDecision] === "Check Stats") {
                stats()
            } else {
                return alive = false
            }
        }
    }else if (enemyChance === 3) {
        event()
    } else {
        console.log(`You run into nothing suspicious.`)
    }
}
let event = () => {

    max = randomEvent.length
    let eventRandom = Math.floor((Math.random() * max) + 1)
    
    if (eventRandom === 1) {
console.log(`
After what feels like an eternity in the forest, you finally
come across a town tucked away from the path. Exhasted from your journey,
you realize that you have two options.
`)
        let townChoice = readlineSync.keyInSelect(townChoices, "What now?")

        if (townChoices[townChoice] === "Go to the Tavern") {
            pictureTavern()
console.log(`
You walk into the tavern. It is mostly empty, but is still
very warm and welcoming. You are given the option of a bigger, but much
more expensive room, versus a smaller and cheeper one.
`)

            max = 2
            let whichIsBetter = Math.floor((Math.random() * max) + 1)
                if (whichIsBetter === 1) {
                    let optionDecided = readlineSync.keyInSelect(twoOptions, "Which do you do?")
                    if(twoOptions[optionDecided] === 1) {
                        console.log("Past Health = ", player.currentHealth)
                        player.currentHealth += 5
                        console.log("Current Health = ", player.currentHealth)
                        console.log("After a night of rest, you get back on your journey.")
                    } else {
                        console.log("Past Health = ", player.currentHealth)
                        player.currentHealth += 10
                        console.log("Current Health = ", player.currentHealth)
                        console.log("After a night of rest, you get back on your journey.")
                    }
                } else {
                    let optionDecided = readlineSync.keyInSelect(twoOptions, "Which do you do?")
                    if(twoOptions[optionDecided] === 1) {
                        console.log("Past Health = ", player.currentHealth)
                        player.currentHealth += 10
                        console.log("Current Health = ", player.currentHealth)
                        console.log("After a night of rest, you get back on your journey.")
                    } else {
                        console.log("Past Health = ", player.currentHealth)
                        player.currentHealth += 5
                        console.log("Current Health = ", player.currentHealth)
                        console.log("After a night of rest, you get back on your journey.")
                    }
                }
        }
    } else if (eventRandom === 2) {
        pictureChest()
console.log(`
Deep in the forest, you stumble upon a small and
simple chest. Upon opening it, you find a health potion and a
weapon improvement.
`)
        console.log("Past Health = ", player.currentHealth)
        console.log("Past Attack Power = ", player.attackMax)
        player.currentHealth += 5
        player.attackMax += 1
        console.log("Current Health = ", player.currentHealth)
        console.log("Current Attack Power = ", player.attackMax)

    }
}
let levelUp = () => {
    const levelUpArr = []
    
    for (let i = 0; i < enemies.length; i++) {
        if (inventory.includes(enemies[i].drop)) {
            levelUpArr.push("yes")
        } else {
            levelUpArr.push("no")
        }
    }

    if (!levelUpArr.includes("no")) {
        console.log("You Level Up!!")
        player.healthMax = player.healthMax + 1
        player.currentHealth = player.healthMax
        
        for (i = 0; i < enemies.length; i++) {
            let index = levelUpArr.indexOf(enemies[i].drop)
            inventory.pop(index)
        }
    }
}

const checkForEnd = () => {
    if (player.healthMax >= 75) {
console.log(`
After a long, and difficult journey, the walls of your
destination finally come into view. You feel a sense of relief and
stride the rest of the way there. You are finally ready for this new lease on
life, whatever it may bring.`)

alive = false
    }
}

const pictureChest = () => {
console.log(`


        ___________________________
        |                          |
        |                          |
        |__________________________|
        |          |   |           |
        |          |___|           |
        |                          |
        |                          |
        |                          |
        ___________________________


`)
}

const pictureTavern = () => {
console.log(`


        ________________
        |               |
        |               |
        |_______________| ___
        |               |/ _ 
        |               | | | |
        |               |  -  |
        |_______________| ___/
        |               |
        |               |
        |               |
        ________________
`)

}
/////////////////////////////
// //
/////////////////////////////
const username = readlineSync.question("What is your name?")
const playerClass = readlineSync.keyInSelect(classOptions, "What class do you want to be?")

console.log(`

Hi ${username}. Welcome to the adventure!!
You are a ${classOptions[playerClass]}.
`)

if (classOptions[playerClass] === "Fighter") {
    console.log(`You are from a simple background. Simple but good.
    As a child, you became enamored with the knights in your city.
    Whenever you had the chance, you would go and watch them train.
    As soon as you were old enough, you decided to join thier ranks,
    but could not seem to make it into thier exclusive ranks.
    Instead, you decided to head out in the world, wanting to grow
    stronger and eventually prove that you are worthy to become a
    knight and protect your kingdom.
    `)
    player.healthMax = player.healthMax + 1
    player.currentHealth = player.currentHealth + 1
    player.attackMax = player.attackMax + 5
} else if (classOptions[playerClass] === "Rogue") {
    console.log(`For your whole life, you have been fighting to
    survive. You grew up as an urchin, with only your older sister
    on your side. It did not take too long for you guys to figure
    out what kinds of skills make life on the streets go smoothly.
    You spent years learning how to make use of the shadows,
    taking odd jobs and sneaking from rich pockets in order to
    have enough to feed the two of you. Now, you are no longer able
    to stay in the city comfortably. Following rumors, you decide
    to strike out on your own to find an infamous treasure.
    `)

    player.healthMax = player.healthMax + 4
    player.currentHealth = player.currentHealth + 4
    player.attackMax = player.attackMax + 2
} else if (classOptions[playerClass] === "Sorceror") {
    console.log(`You have always been surrounded by magic. Your
    mother was a member of a long line of sorcerors, and that inate
    ability passed on to you as well. Your first bit of magic was
    when you were just a toddler, though you can't recall it. After
    coming into adulthood, you realize that you need some sort of
    purpose. You decide to move to a far city, moving through some
    eerie woods to get there.
    `)

    player.healthMax = player.healthMax + 2
    player.currentHealth = player.currentHealth + 2
    player.attackMax = player.attackMax + 4
} else if (classOptions[playerClass] === "Cleric") {
    console.log(`You have always felt a deep desire to help others.
    You stood up to bullies, and helped people on the street.
    You always were drawn to one of the godesses that you would hear
    stories of. As you got older, you started to pray to that god.
    When she started to respond, you were in awe. When you were told
    to go out to help others, you jumped at the opportunity. It
    became even easier when your godess started to give you little
    bits of her power to do this work.
    `)

    player.healthMax = player.healthMax + 5
    player.currentHealth = player.currentHealth + 5
    player.attackMax = player.attackMax + 1
} else {
    player.healthMax = player.healthMax + 3
    player.currentHealth = player.currentHealth + 3
    player.attackMax = player.attackMax + 3
}   



while (alive) {
    whatToDo()

    walk()

    levelUp()
    
    checkForEnd()
}

