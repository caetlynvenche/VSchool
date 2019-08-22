//prelims

if (5 > 3) {
    console.log("is greater than")
}

let cat = "cat"
if (cat.length === 3) {
    console.log("is the length")
}

let dog = "dog"
if (cat === dog) {
    console.log("is the same")
} else {
    console.log("not the same")
}


//bronze

const person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is not allowed to go to the movie.")
}

let name = person.name
if (name.charAt(0) === "B") {
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is not allowed to go to the movie.")
}

if (name.charAt(0) === "B" && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is not allowed to go to the movie.")
}

//silver

if (1 === "1") {
    console.log("strict")
} else if (1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log("yes")
} else {
    console.log("no")
}

//gold

if (typeof "dog" === "string") {
    console.log("is a string")
}

if (typeof "true" === Boolean) {
    console.log("true")
}

let x;
let s = 18;
if (typeof x !== "undefined") {
    console.log("defined")
} else {
    console.log("undefined")
}

if (s > 12) {
    console.log("yes")
} else {
    console.log("no")
}

let myNum = 17;
if (myNum % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
