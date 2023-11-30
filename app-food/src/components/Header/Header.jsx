import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import login from '../../assets/login.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} className="img-fluid" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-autosss">
                        <li className="nav-item ">
                            <NavLink className="nav-link mr-3" to="/">Why Fudo?</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  mr-3" to="/menus">Menu</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link mr-3" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="btn btn-login text-white">
                                <img src={login}
                                    className="img-fluid mr-2" width="20" />
                                Log In</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav >
    )
}

export default Header