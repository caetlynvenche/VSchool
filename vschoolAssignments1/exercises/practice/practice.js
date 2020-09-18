//

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for (let i = 0; i < eventsAtWork.length; i++) {
    if (eventsAtWork[i] === "party") {
        console.log("hooray")
    }
}

var booleans = [true, true, false, true, false, false, false]

let t = 0;
for (let i = 0; i < booleans.length; i++) {
    if (booleans[i] === true) {
        t++
    }
}

console.log(t)