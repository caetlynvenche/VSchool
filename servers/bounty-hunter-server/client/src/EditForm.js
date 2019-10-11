import React from 'react'

const EditForm = (props) => {
    return (
        <div>
            edit Form
            <form onSubmit={props.handleEdit}>
            <input type="text" name="fName" placeholder={props.fName} onChange={props.handleChange} />
            <input type="text" name="lName" placeholder={props.lName} onChange={props.handleChange} />
            <input type="radio" name="type" value="Jedi" onChange={props.handleChange} />
            <label>Jedi</label>
            <input type="radio" name="type" value="Sith" onChange={props.handleChange} />
            <label>Sith</label>
            <input type="number" name="bounty" placeholder={props.bounty} onChange={props.handleChange} />
            <button>Update form</button>
            </form>
        </div>
    )
}

export default EditForm