const family = {
    wife: {
        name: "Sariah",
        age: 27,
        isMarried: true,
        spouse: "Carter",
        hairColor: "blonde",
        eyeColor: "blue",
        children: false,
        occupation: "accountant",
        friends: [
            {name: "Amy"},
            {name: "Lyra"},
            {name: "Robert"}
        ]
    },
    husband: {
        name: "Carter",
        age: 30,
        isMarried: true,
        spouse: "Sariah",
        hairColor: "brown",
        eyeColor: "brown",
        children: false,
        occupation: "engineer",
        friends: [
            {name: "Andy"},
            {name: "Stetson"}
        ]
    },
    catOne: {
        name: "Mochi",
        gender: "female",
        age: 2,
        hairColor: ["white", "gray"],
        eyeColor: ["green", "yellow"],
        declawed: false,
        fixed: true,
        temperment: ["lazy", "calm"],
        speak: function() {
            console.log(this.name + " meows.")
        }
    },
    catTwo: {
        name: "Toby",
        gender: "male",
        age: 8,
        hairColor: ["light orange", "gray", "cream"],
        eyeColor: ["blue"],
        declawed: false,
        fixed: true,
        temperment: ["busy", "loud"],
        speak: function() {
            console.log(this.name + " meows.")
        }
    }   
}

family.son = {name: "Liam"}
family.husband.eyeColor = "hazel"
family.wife.friends.push({name: "Megan"})
family.catThree = {name: "Sakura"}
family.catOne.temperment.push("timid")


console.log(family.catThree.name)
console.log(family.son)
console.log(family.wife.friends)
console.log(family.husband.eyeColor)
console.log(family.catOne.temperment)