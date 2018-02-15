import React from 'react';
import ReduxImage from '../../Assets/Images/redux-forms.10ae9de3.png'

export default class Logo extends React.Component {
    render() {
        return (
            <div id='logoDiv'>
                <img id='logoRedux' src={ReduxImage} alt="logo"/>
            </div>
        )
    }
}