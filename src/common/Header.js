import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav>
                <ul className="nav nav-pills pull-right">
                    <li>
                        <NavLink to="/home" role="presentation" activeclassname="active"> HOME </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" role="presentation" activeclassname="active"> COURSES </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" role="presentation" activeclassname="active"> ABOUT </NavLink>
                    </li>
                </ul>
                <h3 className="text-muted">My App</h3>
            </nav>
        );
    }
}

export default Header;