import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <input type="text" name="fName" placeholder="First Name" onChange={props.handleChange} />
            <input type="text" name="lName" placeholder="Last Name" onChange={props.handleChange} />
            <input type="radio" name="type" value="Jedi" onChange={props.handleChange} />
            <label>Jedi</label>
            <input type="radio" name="type" value="Sith" onChange={props.handleChange} />
            <label>Sith</label>
            <input type="number" name="bounty" placeholder="Bounty" onChange={props.handleChange} />
            <button>Send Bounty Request</button>
        </form>
    )
}

export default Form