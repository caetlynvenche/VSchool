class Character {
    constructor() {
        this.totalCoins = 0
        this.status = "Big"
        this.hasStar = false
        this.gameActive = true
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
                this.gameActive = false
                stop()
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
            console.log("You Got a Star")
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        Star: ${this.hasStar}`)
        return ""
    }
}

const randomMath = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
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

let player = new Character()

let nameMath = randomMath(0, 2)
console.log(nameMath)
if (nameMath === 0) {
    player.setName("Mario")
} else {
    player.setName("Luigi")
}
    
console.log(player.print())


let intervalID = setInterval(events, 500)

let stop = () => {
    clearInterval(intervalID)
}