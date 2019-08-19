import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Footer = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark" id="footer">
            <div className="container">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2">
                            <Link to='/' className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Footer;