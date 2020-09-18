import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <Link to="/">Feed</Link>
            <Link to="/mypage">My Page</Link>
            <Link to="/auth">Auth</Link>
        </nav>
    )
}

export default Nav