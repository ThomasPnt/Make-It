import React from 'react';

export default class PostList extends React.Component {
    render() {
        const {posts} = this.props;
        return (
            <ol className="list-post">
                {posts.map( post =>(
                    <li className='list-post-item' key={post.id}>
                        <strong>{post.title}</strong>
                        <br/>
                            {post.body}
                    </li>
                ))}
            </ol>
        )
    }
}
