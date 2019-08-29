const info = document.info


document.info.addEventListener("submit", (e) => {
    e.preventDefault()

    let fName = info.first.value
    let lName = info.last.value
    let age = info.age.value
    let gender = info.gender.value
    let location = info.location.value
    let diet = []

    let checkedBoxes = document.querySelectorAll("input[name=dietary]:checked")
    for (let i = 0; i < checkedBoxes.length; i++) {
        diet.push(checkedBoxes[i].value)
    }

    let str = `First Name: ${fName}\nLast Name: ${lName} \nAge: ${age} \nGender: ${gender} \nLocation: ${location} \nDietary Restrictions: ${diet}`

    alert(str)
    
})