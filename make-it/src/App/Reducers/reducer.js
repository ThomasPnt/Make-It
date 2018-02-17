import {ADD_USER} from '../action';

const initialState = {
    user: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER' :
            return {
                ...state,
                user: state.user.concat(action.newUser)
            };
        default :
            return state
    }
};

export default userReducer;