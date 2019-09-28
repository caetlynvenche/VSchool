import React from 'react'
import { withAdvice } from '../context/AdviceProvider'
import SingleAdvice from './SingleAdvice'

const Advice = (props) => {
    const mappedAdvice = props.savedAdvice.map((single, i) => <SingleAdvice key={i}
    test={single.text} id={single.id}/>)
    return (
        <div>
            { mappedAdvice }
        </div>
    )
}

export default withAdvice(Advice)