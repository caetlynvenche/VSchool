import React from 'react'
import { withAdvice } from '../context/AdviceProvider'
import SingleAdvice from './SingleAdvice'

const Advice = (props) => {
    const mappedAdvice = props.savedAdvice.map((single, i) => <SingleAdvice key={i}
    test={single.text} id={single.id} local={props.location}/>)
    return (
        <>
        {
            (props.location.pathname === "/advice")
            ?
            <header>
                <h1>Advice</h1>
            </header>
            :
            null
        }
        
        <div className="tabContent">
            <div className="adviceMap">
                { mappedAdvice }
            </div>
        </div>
        </>
    )
}

export default withAdvice(Advice)