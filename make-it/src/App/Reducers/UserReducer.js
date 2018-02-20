const initialState = {
    user: []
};

const UserReducer = (state = initialState.user, action ) => {
    switch (action.type) {
        case 'ADD_USER' :
            return {
                ...state,
                user : action.payload,
            };
        default :
            return state
    }
};

export default UserReducer;