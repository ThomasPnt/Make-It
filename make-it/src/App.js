import React, {Component} from 'react';
import Routes from './App/Router/Routes';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './App/Reducers/reducer';
import {Provider} from 'react-redux';

const reducers = {
    user : userReducer,
    form: formReducer,
};

const reduc = combineReducers(reducers);
const store = createStore(reduc);

class App extends Component {
    render() {
        console.log(store.getState());
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
