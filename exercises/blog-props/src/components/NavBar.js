import React from 'react'

const NavBar = ()=> {
    return (
        <nav>
            <h3 className="div1">Start Bootstrap</h3>
            <div className="nav div2">
                <a href="#navJump">Home</a>
            <a href="#navJump">About</a>
            <a href="#navJump">Sample Post</a>
            <a href="#navJump">Contact</a>
            <p id="navJump"></p>
            </div>
            
        </nav>
        
    )
}

export default NavBar