export const ADD_USER = 'ADD_USER';

const uid = () => new Date().valueOf();

export function addUser(user){
    return {
        type: 'ADD_USER',
        user : user,
        id : uid(),
    };
}