import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="error">
                <h1>Error 404</h1>
                <h4>We are looking for your page...but we can't find it</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1cF8crrq0kkOOqg7O8Mgvhm4uyN4Xjj-Yrq-mChZA_ETVCyk" alt="computer"/>
            </div>
        )
    }
}