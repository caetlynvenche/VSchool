import React from 'react'
import Thing from './Thing'
// import EditForm from './EditForm'

const List = (props) => {
    const mappedList = props.list.map(item => <div key={item._id} style={{border: "1px solid black"}}>
            <Thing  {...item} 
                deleteItem={() => props.deleteItem(item._id)}
                handleEdit={props.handleEdit} />
            {/* <EditForm  
                handleChange={props.handleChange}
                /> */}
        </div>)
    return (
        <main>
            {mappedList}
        </main>
    )
}

export default List