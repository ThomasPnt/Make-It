import React from 'react';
import SignInForm from "./SignInComponent/SignInForm";
import FooterSignIn from "./SignInComponent/FooterSignIn";
import HeaderSignIn from "./SignInComponent/HeaderSignIn";

import {connect} from "react-redux";
import {addUser} from "../../action";


class SignIn extends React.Component {
    submit = value => {
        console.log(value)
    };

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

function mapStateToProps(state){
    return {user : state.user};
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: value => dispatch(addUser(value))
    }
}

export default connect(mapDispatchToProps,mapStateToProps)(SignIn);
