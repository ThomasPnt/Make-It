import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../../Input';
import validate from './Validate';

var countries = require("i18n-iso-countries");
const pays = Object.values(countries.getAlpha2Codes());

class SignInForm extends React.Component {
    constructor(){
        super();
        this.state = {pass: ''};
    }

    password(event){
        let strength = event.target.value;
        if(strength.length < 6){
            this.setState({pass:'weak'})
        } else if(strength.length < 12) {
            this.setState({pass:'middle'})
        } else if(strength.length < 16 ){
            this.setState({pass:'strong'})
        }
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <span className="sideBar bug"/>
                <Field name="email" component={Input} type="email" placeholder="Email"/>
                <span className="sideBar"/>
                <Field name="firstName" component={Input} type="text" placeholder="First Name"/>
                <span className="sideBar"/>
                <Field name="lastName" component={Input} type="text" placeholder="Last Name"/>
                <span className="sideBar"/>
                <Field name="password" component={Input} type="password" placeholder="Password" className={this.state.pass} onChange={this.password.bind(this)}/>
                <span className="sideBar"/>
                <Field name="passwordConfirmation" component={Input} type="password" placeholder="Password Confirmation"/>
                <span className="sideBar"/>
                <Field name="country" component="select" placeholder="Country of Living">
                    <option value="">Country of Living</option>
                    {pays.map(countryOptions =>(
                        <option value={countryOptions} key={countryOptions}>
                            {countryOptions}
                        </option>
                    ))}
                </Field>
                <div className="checkboxDesc">
                    <Field name="news" component={Input} type="checkbox"/>
                    <p>I'd like to receive news, promotions, and updates via email about ViberMusic and its partners.<span id="spanTxt"> You
                    can subscribe anytime</span></p>
                </div>
                <div className="checkboxDesc">
                    <Field name="cgu" component={Input} type="checkbox"/>
                    <p> I agree to ViberMusic <a href=''>Terms of Use</a>, and <a href=''>Privacy Police</a></p>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signIn',
    fields: ['email','firstName','lastName','password','country','news'],
    validate,
})(SignInForm)

