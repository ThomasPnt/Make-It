import React from 'react';

export default class PostList extends React.Component {
    render() {
        const {posts} = this.props;
        return (
            <ul className="list-post">
                {posts.map( post =>(
                    <li className='list-post-item' key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        )
    }
}
