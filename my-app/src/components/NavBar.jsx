import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <div id="navbar">
            <nav>
                <ul id="links">
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/planner'>Planner</Link></li>
                    <li><Link className='links' to='/todo'>To Do List</Link></li>
                </ul>
            </nav>
        </div>
    )
}
