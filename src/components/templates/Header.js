import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../logo.png'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark" id="header">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
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

export default Header