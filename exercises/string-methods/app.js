function uppercaseAndLowercase(str) {
    return str.toUpperCase() + " " + str.toLowerCase()
}

console.log(uppercaseAndLowercase("hi"))


function returnHalfLength(str) {
    num = str.length / 2
    return Math.floor(num)
}

console.log(returnHalfLength("hello"))


function returnFirstHalf(str) {
    return str.slice(0, str.length / 2)
}

console.log(returnFirstHalf("well then cool"))


function capitalAndLowerHalves(str) {
    let front = str.slice(0, str.length / 2)
    let back = str.slice(str.length / 2)

    return front.toUpperCase() + back.toLowerCase()
}

console.log(capitalAndLowerHalves("let's try this"))


//optional

function capital(str) {
    let strArr = str.split(" ")
    for (i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    let finalString = strArr.join(" ")
    return finalString
}

console.log(capital("hello there"))

