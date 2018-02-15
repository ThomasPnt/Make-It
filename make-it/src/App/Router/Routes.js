import React from 'react';
import Logo from '../Header/HeaderComponent/Logo';
import Soucis from "../Layout/Soucis";
import CreateAccount from '../Layout/CreateAccount/CreateAccount'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="header">
                        <Logo/>
                        <div className="navbar">
                            <ul>
                                <li><NavLink activeClassName="selected" to='/Tracks'>Submit track</NavLink></li>
                                <li><NavLink activeClassName="selected" to='/CreateAccount'>Create an account</NavLink></li>
                                <li><NavLink activeClassName="selected" to='/Works'>How it works</NavLink></li>
                                <li><NavLink activeClassName="selected" to='/Pricing'>Pricing</NavLink></li>
                                <li><NavLink activeClassName="selected" to='/Soucis'>Log in | Sign in</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path='/Tracks'/>
                            <Route exact path='/CreateAccount' component={CreateAccount}/>
                            <Route exact path='/Works' component={Soucis}/>
                            <Route exact path='/Pricing' component={Soucis}/>
                            <Route exact path='/' component={Soucis}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}