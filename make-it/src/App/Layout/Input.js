import React from 'react';

export default class Input extends React.Component {
    render() {
        const { name , input , type , placeholder} = this.props;
        return (
            <div className="InputForm">
                <input {...input} name={name} type={type} placeholder={placeholder} />
            </div>
        )
    }
}