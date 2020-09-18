const readline = require("readline-sync")


const choices = ["add", "subtract", "multiply", "divide"]


const num1 = readline.question("Please enter your first number")
const num2 = readline.question("Please enter your second number")
const operation = readline.keyInSelect(choices, "Please enter the operation you want to perform")


if (choices[operation] === "add") {
    result = add(num1, num2)
} else if (choices[operation] === "subtract"){
    result = sub(num1, num2)
} else if (choices[operation] === "multiply"){
    result = mul(num1, num2)
} else if (choices[operation] === "divide"){
    result = div(num1, num2)
} else {
    result = "canceled"
}

console.log("The result is " + result)



function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function sub(num1, num2) {
    return Number(num1) - Number(num2)
}

function mul(num1, num2) {
    return Number(num1) * Number(num2)
}

function div(num1, num2) {
    return Number(num1) / Number(num2)
}

