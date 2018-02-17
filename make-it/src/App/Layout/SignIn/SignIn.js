import React from 'react';
import SignInForm from "./SignInComponent/SignInForm";


export default class SignIn extends React.Component {
    submit = values => {
        console.log(values)
    }
    render() {
        return (
            <div className="signin">
                <h1>futur login</h1>
                <SignInForm onSubmit={this.submit}/>
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