import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../../Input';

var countries = require("i18n-iso-countries");
const pays = Object.values(countries.getAlpha2Codes());
/*
const validate = values => {
    const =
}*/

class SignInForm extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="email" component={Input} type="email" placeholder="Email"/>
                <Field name="firstName" component={Input} type="text" placeholder="First Name"/>
                <Field name="lastName" component={Input} type="text" placeholder="Last Name"/>
                <Field name="password" component={Input} type="password" placeholder="Password"/>
                <Field name="passwordConfirmation" component={Input} type="password" placeholder="Password Confirmation"/>
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
                    <p> I agree to ViberMusic <a>Terms of Use</a>, and <a>Privacy Police</a></p>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}

/*const SignInForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" component={Input} type="email" placeholder="Email"/>
            <Field name="firstName" component={Input} type="text" placeholder="First Name"/>
            <Field name="lastName" component={Input} type="text" placeholder="Last Name"/>
            <Field name="password" component={Input} type="password" placeholder="Password"/>
            <Field name="passwordConfirmation" component={Input} type="password" placeholder="Password Confirmation"/>
            <Field name="country" component="select" placeholder="Country of Living">
            </Field>
            <div className="checkboxDesc">
                <Field name="news" component={Input} type="checkbox"/>
                <p>I'd like to receive news, promotions, and updates via email about ViberMusic and its partners.<span id="spanTxt"> You
                    can subscribe anytime</span></p>
            </div>
            <div className="checkboxDesc">
                <Field name="cgu" component={Input} type="checkbox"/>
                <p> I agree to ViberMusic <a>Terms of Use</a>, and <a>Privacy Police</a></p>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
};*/

/*SignInForm = connect(
    function mapStateToProps(state){
        return {user : state};
    },
    function mapDispatchToProps(dispatch){
        return {
            addUser: data => dispatch(addUser(data))
        }
    }
)(SignInForm);*/

export default reduxForm({
    form: 'signIn',
    field: ['email','firstName','lastName','password','passwordConfirmation','country','news','cgu']
})(SignInForm)

