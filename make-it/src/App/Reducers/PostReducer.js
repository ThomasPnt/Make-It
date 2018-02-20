const initialState = {
    posts : []
};

const PostReducer = (state = initialState.posts, action) => {
    switch(action.type){
        case 'LOAD_API_SUCCESS':
            return action.posts;
        default:
            return state;
    }
};

export default PostReducer;