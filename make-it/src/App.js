import React, {Component} from 'react';
import Routes from './App/Router/Routes';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import UserReducer from './App/Reducers/UserReducer';
import {Provider} from 'react-redux';

const reducers = {
    UserReducer,
    form: formReducer,
};

const reduc = combineReducers(reducers);
const store = createStore(reduc);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Routes/>
                </Provider>
            </div>
        );
    }
}

export default App;
