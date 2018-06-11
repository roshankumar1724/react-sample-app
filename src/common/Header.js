import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import LoadingDots from './LoadingDots';

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
                <LoadingDots interval={100} dots={20} />
            </nav>
        );
    }
}

export default Header;