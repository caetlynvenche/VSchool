// function removeDups(str) {
//     return str.split("").filter(function(item, pos, self) {
//         return self.indexOf(item) === pos
//     }).join("")
// }

// console.log(removeDups("bookeeper larry"))



function parseQuery(str) {
    // const anArr = []
    // let newArr =  str.split("?")
    // newArr = newArr[1].split("&")
    // for (let i = 0; i < newArr.length; i++) {
    //     let part = newArr[i].split("=")
    // //     anArr.push(part[0])
    // //     anArr.push(part[1])
    // // }
    // // const obj = {
    // //     [anArr[0]]: anArr[1],
    // //     [anArr[2]]: anArr[3]
    // }

    // return obj
    //____________________________//

    const results = {}
    const queryString = str.split("?")[1]
    const queryArr = queryString.split("&")
    for (let i = 0; i < queryArr.length; i++) {
        const keyValueArr = queryArr[i].split("=")

        results[keyValueArr[0]] = keyValueArr[1]
    }

    return results
}

console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist"))