import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <div id="navbar">
            <nav>
                <ul id="links">
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/dailytodo'>Daily</Link></li>
                    <li><Link className='links' to='/weeklytodo'>Weekly</Link></li>
                    <li><Link className='links' to='/monthlytodo'>Monthly</Link></li>
                </ul>
            </nav>
        </div>
    )
}
