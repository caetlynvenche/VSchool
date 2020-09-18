class Character {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked) {
        this.name = namePicked
    }

    gotHit() {
        if (this.hasStar) {
            this.hasStar = false
            console.log(`
            Your Star Protected You!!
            `)
        } else {
            if (this.status === "Small") {
            gameActive = false
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        }
        }

        
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.status = "You Got a Star"
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}`)
        return ""
    }
}

//make loops. Set interval
let player = new Character("", 0, "Big", false, true)
console.log(player.print())

const randomName = () => {
    let nameMath = randomMath(0, 1)
    if (nameMath === 0) {
        player.setName("Mario")
    } else {
        player.setName("Luigi")
    }
}

const events = () => {
    let result = randomMath(0, 3)
    if (result === 0) {
        player.gotHit()
        player.print()
    } else if (result === 1) {
        player.gotPowerup()
        player.print()
    } else if (result === 2) {
        player.addCoin()
        player.print()
    }
}

// const stopRunningEvents = () => {
//     clearInterval(gameHappening)
// }



    randomName()
    let gameHappening = setInterval(events, 1000)
    while (gameActive) {

    }
    clearInterval(gameHappening)






const randomMath = (min, max) => {
    return Math.floor(Math.random * (max - min) + min)
}