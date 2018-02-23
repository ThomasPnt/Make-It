import React from 'react';
import SignInForm from "./SignInComponent/SignInForm";
import FooterSignIn from "./SignInComponent/FooterSignIn";
import HeaderSignIn from "./SignInComponent/HeaderSignIn";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {addUser} from "../../Actions/ActionUser";

class SignIn extends React.Component {
    handleSubmit = (values) => {
        var data = {
            id: new Date().valueOf(),
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            country: values.country,
            news: values.news
        };
        this.props.addUser(data);
        this.props.history.push('/Works');
    };

    render() {
        return (
            <div className="signin">
                <HeaderSignIn/>
                <SignInForm onSubmit={this.handleSubmit}/>
                <FooterSignIn/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser}, dispatch)
}

function mapStateToProps(state) {
    /*console.log(state.UserReducer);*/
    return {UserReducer: state.UserReducer};
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
