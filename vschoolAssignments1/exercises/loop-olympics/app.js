//prelims

for (i = 0; i < 10; i++) {
    console.log(i)
}

for (i = 9; i >= 0; i--) {
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//bronze
const bronzeArr = []
for (i = 0; i < 10; i++) {
    bronzeArr.push(i);
}
console.log(bronzeArr)

const bigArr = []
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        bigArr.push(i)
    }
}
console.log(bigArr)

const fruitArr = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitNew = []
for (i = 0; i < fruitArr.length; i++) {
    if (i % 2 === 0) {
        fruitNew.push(fruitArr[i])
    }
}
console.log(fruitNew)

//silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

const peopleNames = []
const peopleOccupations = []

for (i = 0; i < peopleArray.length; i++) {
     
        peopleNames.push(peopleArray[i].name)
    
        peopleOccupations.push(peopleArray[i].occupation)
}
console.log(peopleNames)
console.log(peopleOccupations)

const everyOtherName = []
const everyOtherOccupation = []

for (i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        everyOtherName.push(peopleArray[i].name)
    } else {
        everyOtherOccupation.push(peopleArray[i].occupation)
    }
}

console.log(everyOtherName)
console.log(everyOtherOccupation)
