function removeDups(str) {
    return str.split("").filter(function(item, pos, self) {
        return self.indexOf(item) === pos
    }).join("")
}

console.log(removeDups("bookeeper larry"))