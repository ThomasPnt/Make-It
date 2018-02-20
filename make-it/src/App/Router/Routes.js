import React from 'react';
import Logo from '../Header/HeaderComponent/Logo';
import CreateAccount from '../Layout/CreateAccount/CreateAccount';
import Pricing from '../Layout/Pricing/Pircing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Track from "../Layout/SubmitTrack/Track";
import Work from "../Layout/Works/Work";
import Navbar from "../Header/HeaderComponent/Navbar";
import SignIn from "../Layout/SignIn/SignIn";
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
                            <Route exact path='/Tracks' component={Track}/>
                            <Route exact path='/CreateAccount' component={CreateAccount}/>
                            <Route exact path='/Works' component={Work}/>
                            <Route exact path='/Pricing' component={Pricing}/>
                            <Route exact path='/SignIn' component={SignIn}/>
                            <Route path='/' component={SignIn}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}