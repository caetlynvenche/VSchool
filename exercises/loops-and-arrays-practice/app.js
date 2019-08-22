//1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++
    }
}

console.log("computers", count)

//2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
    }
}

//3

let lightSwitchArray = [2, 5, 435, 4, 3]
let howManyToggles = false;

for (i = 0; i < lightSwitchArray.length; i++) {
    if (lightSwitchArray[i] % 2 === 1) {
        howManyToggles = !howManyToggles
    }
    
}

if (howManyToggles === true) {
        console.log("The light is on")
    } else {
        console.log("The light is off")
    }

