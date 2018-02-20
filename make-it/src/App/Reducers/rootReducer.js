import {combineReducers} from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    PostReducer,
    UserReducer,
    form : formReducer
});

export default rootReducer;