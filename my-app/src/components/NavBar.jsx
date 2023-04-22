import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div id="navbar">
            <nav>
            <Link to='/'>Home</Link>
                <ul id='links'>
                    <li><Link to='/dailytodo'>Daily</Link></li>
                    <li><Link to='/weeklytodo'>Weekly</Link></li>
                    <li><Link to='/monthlytodo'>Monthly</Link></li>
                </ul>
            </nav>
        </div>
    )
}
