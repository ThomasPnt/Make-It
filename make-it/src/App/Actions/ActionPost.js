import postApi from '../Api/postApi';

export const LOAD_API_SUCCESS = 'LOAD_API_SUCCESS';

export function loadPosts(){
    return function(dispatch){
        return postApi.getAllPosts().then(posts => {
            dispatch(loadApiSuccess(posts));
        }).catch(error =>{
            throw(error);
        })
    }
}

export function loadApiSuccess(posts){
    return {type: 'LOAD_API_SUCCESS' , posts};
}