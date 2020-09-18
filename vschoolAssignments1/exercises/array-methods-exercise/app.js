var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit", fruit)
console.log("vegetables:", vegetables)

vegetables.pop()

// console.log("fruit", fruit)
// console.log("vegetables:", vegetables)

fruit.shift()

// console.log("fruit", fruit)
// console.log("vegetables:", vegetables)

let orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)

// console.log("fruit", fruit)
// console.log("vegetables:", vegetables)

let vegLength = vegetables.length
vegetables.push(vegLength)

// console.log("fruit", fruit)
// console.log("vegetables:", vegetables)

let food = fruit.concat(vegetables)

// console.log(food)

food.splice(4, 2)

// console.log(food)

food.reverse()

console.log(food)

food.join()

console.log(food.join())