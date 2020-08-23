import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
function Navbar() {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to = "/" className="brand-logo center">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar
