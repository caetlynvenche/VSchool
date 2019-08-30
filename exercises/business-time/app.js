
//CONTACT
const form = document.form

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let fName = form.firstName.value
    let lName = form.lastName.value
    let email = form.email.value

    let areaCode = form.areaCode.value
    let numB = form.numB.value
    let numC = form.numC.value

    let phone = "(" + areaCode + ") " + numB + "-" + numC

    let reason = []
    let contact = form.prefContact.value


    let checkedBoxes = document.querySelectorAll("input[name=typeContact]:checked")

    for (let i = 0; i < checkedBoxes.length; i++) {
        reason.push(checkedBoxes[i].value)
    }

    let filledForm = `First Name: ${fName} \nLast Name: ${lName} \nEmail: ${email} \nPhone: ${phone} \nReason: ${reason} \nContact: ${contact}`


    alert(filledForm)

})