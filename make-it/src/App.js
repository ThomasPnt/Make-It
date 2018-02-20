import React, {Component} from 'react';
import Routes from './App/Router/Routes';
import {createStore, combineReducers , applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import UserReducer from './App/Reducers/UserReducer';
import PostReducer from './App/Reducers/PostReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {loadPosts} from "./App/ActionPost";

const reducers = {
    PostReducer,
    UserReducer,
    form: formReducer,
};

const reduc = combineReducers(reducers);
const store = createStore(reduc,applyMiddleware(thunk));

store.dispatch(loadPosts);

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
