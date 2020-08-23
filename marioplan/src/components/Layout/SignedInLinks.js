import React from 'react'
import {NavLink} from 'react-router-dom'
function SignedInLinks() {
    return (
            <ul className="right">
                <li><NavLink to ="/createproject">NewProject</NavLink></li>
                <li><NavLink to ="/">Logout</NavLink></li>
                <li><NavLink to ="/" className='btn btn-floating red'>SR</NavLink></li>
            </ul>
    )
}

export default SignedInLinks