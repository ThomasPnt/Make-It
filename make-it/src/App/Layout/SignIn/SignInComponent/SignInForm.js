import React from 'react';
import {Field, reduxForm } from 'redux-form';
import Input from '../../Input';

var countries = require("i18n-iso-countries");
const pays = countries.getAlpha3Codes();

const selectCountry = () => {
    return(
        pays.map((key,value) => {
            return <option value={key}>{value}</option>
        })
    )
}


let SignInForm = (props) => {
    console.log(pays);

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
            <button type="submit">Sign Up</button>
        </form>
    )
};

SignInForm = reduxForm({
    form: 'signIn',
})(SignInForm)

export default SignInForm;

