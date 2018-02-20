export const ADD_USER = 'ADD_USER';

export function addUser(data){
    return {
        type: 'ADD_USER',
        payload: data,
    }
}