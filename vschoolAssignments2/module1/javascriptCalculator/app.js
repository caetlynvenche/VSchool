const readline = require('readline-sync')

const add = (num1, num2) => {
    return num1 + num2
}
const sub = (num1, num2) => {
    return num1 - num2
}
const mult = (num1, num2) => {
    return num1 * num2
}
const div = (num1, num2) => {
    return num1 / num2
}

let actionChoices = ['add', 'sub', 'mult', 'div']

let numInput1 = readline.question('What is the first number?')
let numInput2 = readline.question('What is the second number?')
let actionIndex = readline.keyInSelect(actionChoices, 'What operation do you want to do?') //to read, do actionChoices[actionIndex]
let result

if (actionChoices[actionIndex] === 'add') {
    result = add(numInput1, numInput2)
} else if (actionChoices[actionIndex] === 'sub') {
    result = sub(numInput1, numInput2)
} else if (actionChoices[actionIndex] === 'mult') {
    result = mult(numInput1, numInput2)
} else if (actionChoices[actionIndex] === 'div') {
    result = div(numInput1, numInput2)
} else {
    result = 'invalid result'
}

if (result === NaN) {
    result = 'invalid result'
}

console.log(result)

