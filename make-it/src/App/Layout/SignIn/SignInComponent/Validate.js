const validate = values => {
    const errors = {};

    if(!values.email) {
        errors.email = 'Email is Required';
    }   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.firstName) {
        errors.firstName = "Required";
    } else if(values.firstName.length < 3 ) {
        errors.firstName= 'Too short';
    }

    if(!values.lastName) {
        errors.lastName = "Required";
    } else if(values.lastName.length < 3 ) {
        errors.lastName= 'Too short';
    }

    if(!values.password){
        errors.password = "Required";
    }

    if(!values.passwordConfirmation){
        errors.passwordConfirmation = "Required";
    } else if(values.passwordConfirmation !== values.password ){
        errors.passwordConfirmation = "please enter the same password";
    }

    if(!values.cgu){
      errors.cgu = "Must be accepted";
    } else if(values.cgu === false){
        errors.cgu = "Must be accepted";
    }

    if(!values.country){
        errors.country = "Required";
    }

    return errors;

};

export default validate;