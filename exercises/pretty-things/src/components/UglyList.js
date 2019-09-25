import React from 'react'
import UglyThings from './UglyThings'

const UglyList = (props) => {
    const mappedList = props.uglyList.map(item => <UglyThings key={item._id} {...item}/>)
    return (
        <main>
            {mappedList}
        </main>
    )
}

export default UglyList