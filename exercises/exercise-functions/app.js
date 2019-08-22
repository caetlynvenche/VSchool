let doubleParam = function(num1, num2) {
    return num1 + num2
}

console.log(doubleParam(3,8))


let tripleParam = function(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(tripleParam(1,2,3))


let evenOrOdd = function(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOrOdd(12))

let stringLength = function(str) {
    if (str.length >= 20) {
        if (str.length % 2 === 0) {
            return str.slice(0, str.length / 2)
        } else {
            return str.slice(0, (str.length - 1) / 2)
        }
    } else {
        return str.concat(str)
}
}

console.log(stringLength("abcdefghijklmnopqrstuvwxyz"))
console.log(stringLength("Hello"))


// var fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
// var fibonacciNewArray = []
// var fibonacciSum = function(n) {
//     for (i = 0; i < fibonacciNumbers[n]; i++) {
//         fibonacciNewArray.push(fibonacciNumbers[i])
//     }
// }

// fibonacciSum(4)
// console.log(fibonacciNewArray)
// let total = 0
// fibonacciNewArray.reduce(reduceFibonacci)


// function reduceFibonacci(total) {
//     for (i = 0; i < fibonacciNewArray.length; i++) {
//         return total + fibonacciNewArray[i]
//     }
// }

// console.log(total)

