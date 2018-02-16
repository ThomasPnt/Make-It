import React from 'react';

import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><NavLink activeClassName="selected" to='/Tracks'>Submit track</NavLink></li>
                    <li><NavLink activeClassName="selected" to='/CreateAccount'>Create an account</NavLink></li>
                    <li><NavLink activeClassName="selected" to='/Works'>How it works</NavLink></li>
                    <li><NavLink activeClassName="selected" to='/Pricing'>Pricing</NavLink></li>
                    <li><NavLink activeClassName="selected" to='/SignIn'>Log in | Sign in</NavLink></li>
                </ul>
            </div>
        )
    }
}