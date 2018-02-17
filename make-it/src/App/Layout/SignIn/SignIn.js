import React from 'react';
import SignInForm from "./SignInComponent/SignInForm";
import FooterSignIn from "./SignInComponent/FooterSignIn";
import HeaderSignIn from "./SignInComponent/HeaderSignIn";


export default class SignIn extends React.Component {
    submit = values => {
        console.log(values)
    }
    render() {
        return (
            <div className="signin">
                <HeaderSignIn/>
                <SignInForm onSubmit={this.submit}/>
                <FooterSignIn/>
            </div>
        )
    }
}


/*
SignIn = connect(
    function mapStateToProps(state){
        return {user : state};
    },
    function mapDispatchToProps(dispatch){
        return {
            addUser: data => dispatch(addUser(data))
        }
    }
)(SignIn);*/
