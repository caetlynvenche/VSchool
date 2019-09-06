//map arrays

function doubleNumbers(arr){
    const dblNumArr = arr.map((num) => {
        return num * 2
    })
    return dblNumArr
}
// console.log(doubleNumbers([2, 5, 100]));



function stringItUp(arr){
    const stringArr = arr.map((num) => {
        return num.toString()
    })
    return stringArr
}

// console.log(stringItUp([2, 5, 100]));



function capitalizeNames(arr){
    const capitName = arr.map((str) => {
        str = str.toLowerCase()
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    return capitName
}

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



function namesOnly(arr){
    const justNames = arr.map((obj) => {
        return obj.name
    })
    return justNames
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

function makeStrings(arr){
    const canTheyGo = arr.map((obj) => {
        if(obj.age >= 18) {
            return obj.name + " can go to the Matrix"
        } else {
            return obj.name + " is underage!!"
        }
    })
    return canTheyGo
}

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 


//filter arrays

function fiveAndGreaterOnly(arr) {
    const filterFive = arr.filter((num) => {
        if (num > 5) {
            return num
        }
    })
    return filterFive
}

// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    const filterEven = arr.filter((num) => {
        if (num % 2 === 0) {
            return num
        }
    })
    return filterEven
}

// console.log(evensOnly([3, 6, 8, 2]));

function fiveCharactersOrFewerOnly(arr) {
    const numberOfChar = arr.filter((str) => {
        if (str.length <= 5) {
            return str
        }
    })
    return numberOfChar
}

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

function peopleWhoBelongToTheIlluminati(arr){
    const theyBelong = arr.filter((obj) => {
        if (obj.member === true) {
            return obj
        }
    })
    return theyBelong
}

// console.log(peopleWhoBelongToTheIlluminati([
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]));

function ofAge(arr){
    const oldEnough = arr.filter((obj) => {
        if (obj.age >= 18) {
            return obj
        }
    })
    return oldEnough
}

// console.log(ofAge([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));


//Sort

function leastToGreatest(arr) {
    const sortLToG = arr.sort((a, b) => {
        return a - b
    })
    return sortLToG
}

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr) {
    const sortGToL = arr.sort((a, b) => {
        return b - a
    })
    return sortGToL
}

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr) {
    const strLength = arr.sort((a, b) => {
        return a.length > b.length
    })
    return strLength
}

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

function alphabetical(arr) {
    const alpha = arr.sort((a, b) => {
        return a > b
    })
    return alpha
}

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

function byAge(arr){
    const youngToOld = arr.sort((a, b) => {
        return a.age - b.age
    })
    return youngToOld
}

// console.log(byAge([
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]));

//Reduce

function total(arr) {
    const result = arr.reduce((final, current) => {
        final+= current
        return final
    })
    return result
}

// console.log(total([1,2,3]));

function stringConcat(arr) {
    const strArr = arr.reduce((final, current) => {
        final+= current
        return final
    }, "")
    return strArr
}

// console.log(stringConcat([1,2,3]));

function totalVotes(arr) {
    const whoVotes = arr.reduce((a, b) => {
        if (b.voted === true) {
            return a + 1
        } else {
            return a
        }
    }, 0)
    return whoVotes
}

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters));


function shoppingSpree(arr) {
    const cost = arr.reduce((final, current) => {
        return final + current.price
    }, 0)
    return cost
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// console.log(shoppingSpree(wishlist));


function flatten(arr) {
    const arrListFlat = arr.reduce((final, current) => {
        return final.concat(current)
    }, [])    
    return arrListFlat
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// console.log(flatten(arrays));


// ES6 practice

// 1)
const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = (arr) => {
    return arr.map((carrot) => { return { type: "carrot", name: carrot }})
}

// 2)

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = (arr) => {
    return arr.filter((person) => {return person.friendly })
}

//3)

doMathSum = (a, b) => { return a + b }

produceProduct = (a, b) => { return a * b }

//4)

printString = (firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

//5)

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

filterForDogs = (arr) => { return arr.filter(animal => {
    
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}

///How do I make this on one line?

//6)

newStr = (name, place) => {
    return `Hi ${name}!
    Welcome to ${place}.
    I hope you enjoy your stay. Please ask the president of ${place} if you need anything.
    `
}