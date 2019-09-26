import React from 'react'
import Thing from './Thing'
import EditForm from './EditForm'

const List = (props) => {
    const mappedList = props.list.map(item => <div key={item._id} style={{border: "1px solid black"}}>
            <Thing  {...item} 
                deleteItem={() => props.deleteItem(item._id)} 
                handleChange={props.handleChange} />
            <EditForm  
                handleChange={props.handleChange}
                handleEditSubmit={props.handleEditSubmit}
                />
        </div>)
    return (
        <main>
            {mappedList}
        </main>
    )
}

export default List