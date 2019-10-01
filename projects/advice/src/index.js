import React from 'react'
import ReactDOM from 'react-dom'
import AdviceProvider from './context/AdviceProvider'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

ReactDOM.render(
    <AdviceProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AdviceProvider>, 
document.getElementById('root'))