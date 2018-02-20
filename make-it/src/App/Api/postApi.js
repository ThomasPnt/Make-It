class postApi {
    static getAllPosts(){
        return fetch('http://jsonplaceholder.typicode.com/posts').then(response =>
        {
            return response.json();
        }).catch(error => {
            return error;
        })
    }
}

export default postApi;