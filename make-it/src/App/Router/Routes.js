import React from 'react';
import Logo from '../Header/HeaderComponent/Logo';
import CreateAccount from '../Layout/CreateAccount/CreateAccount';
import Pricing from '../Layout/Pricing/Pircing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Track from "../Layout/SubmitTrack/Track";
import Work from "../Layout/Works/Work";
import Login from "../Layout/Login/Login";
import Navbar from "../Header/HeaderComponent/Navbar";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="header">
                        <Logo/>
                        <Navbar/>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path='/Tracks' component={Work}/>
                            <Route exact path='/CreateAccount' component={CreateAccount}/>
                            <Route exact path='/Works' component={Pricing}/>
                            <Route exact path='/Pricing' component={Track}/>
                            <Route exact path='/Login' component={Login}/>
                            <Route path='/' component={Login}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}