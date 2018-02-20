import React, {Component} from 'react';
import Routes from './App/Router/Routes';
import ConfigStore from './App/Store/ConfigStore';
import {Provider} from 'react-redux';
import {loadPosts} from "./App/Actions/ActionPost";

const store = ConfigStore();

store.dispatch(loadPosts());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Routes/>
                </div>
            </Provider>
        );
    }
}

export default App;
