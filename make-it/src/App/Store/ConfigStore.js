import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/rootReducer';
import thunk from 'redux-thunk';

export default function ConfigStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}