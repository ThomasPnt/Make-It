import React, {Component} from 'react';
import Routes from './App/Router/Routes';
import ConfigStore from './App/Store/ConfigStore';
import {Provider} from 'react-redux';
import {loadPosts} from "./App/ActionPost";

const store = ConfigStore();

store.dispatch(loadPosts());

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
