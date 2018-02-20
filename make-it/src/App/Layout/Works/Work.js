import React from 'react';
import {connect} from 'react-redux';
import PostList from './WorksComponent/PostList';


class Work extends React.Component {
    render() {
        return (
            <div>
                <h1>Works</h1>
                <div>
                    <PostList posts={this.props.posts}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state , ownProps) {
    return { posts: state.PostReducer };
}


export default connect(mapStateToProps)(Work);