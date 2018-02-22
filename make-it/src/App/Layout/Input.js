import React from 'react';

export default class Input extends React.Component {
    render() {
        const { name , input , type , placeholder , className , meta : { touched, error }} = this.props;
        return (

            <div className="InputForm">
                <input {...input} className={className} name={name} type={type} placeholder={placeholder}/>
                {touched && error && <span id="error">{error}</span>}
                {!error && <span id={className}>{className}</span>}
            </div>
        )
    }
}