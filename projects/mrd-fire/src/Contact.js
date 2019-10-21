import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2>how to have a form and have it update and be viewable by dad when someone submits it</h2>
            <h2>how to have this done with best practice and safely for dad and customers</h2>
            <h2>do i save this in a database</h2>
            <h2>do i need user auth? Might need to have a simple log in for him and I to view the information. //ask Nate or Sam in the morning</h2>

            <form>
                <input type="text" name="fName" placeholder="First Name" />

                <input type="text" name="lName" placeholder="Last Name" />
                
                <input type="email" name="email" placeholder="Email Adress" />

                <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />

                <textarea name="message" placeholder="Customize a Message"></textarea>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact