import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from "axios"

class Post extends Component {
    state = {
        post: null,
        comments: null,
        user: null
    };

    render() {

        console.log(this.state);

        const user = this.state.user ? (
            <div className="card-header bg-dark">
                <p className="mb-0 font-italic text-white">Author: {this.state.user.name}</p>
            </div>
        ) : (
            <p className="text-center">Loading user data...</p>
        );

        const post = this.state.post ? (

            <div className="card-body">
                <h1 className="card-title">{this.state.post.title}</h1>
                <p className="card-text">{this.state.post.body}</p>
            </div>

        ) : (
            <p className="text-center">Loading post...</p>
        );

        const comments = this.state.comments ? (
            this.state.comments.map(comment => {
                return (
                    <div className="comment" key={comment.id}>
                        <h4 className="mb-0">{comment.name}</h4>
                        <p className="mb-0">{comment.body}</p>
                        <hr />
                    </div>
                )
            })
        ) : (
            <p className="text-center">Loading comments...</p>
        );

        return (
            <div className="container" id="post">
                <div className="row row-no-padding" id="post-body">
                    <div className="card w-100">
                        {user}
                        {post}
                    </div>
                </div>
                <div className="row row-no-padding" id="comments">
                    <div className="card w-100">
                        <div className="card-header bg-dark">
                            <h4 className="mb-0 text-white">{this.state.comments ? this.state.comments.length + ' comments' : 'No comments'}</h4>
                        </div>
                        <div className="card-body">
                            {comments}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getPost = (post_id) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
            .then(res => {
                this.setState({
                    post: res.data
                });
                this.getUser(res.data.userId);
            })
    };

    getUser = (user_id) => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + user_id)
            .then(res => {
                this.setState({
                    user: res.data
                });
            })
    };

    getCommentsForPost = (post_id) => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + post_id)
            .then(res => {
                this.setState({
                    comments: res.data
                });
            })
    };

    componentDidMount() {
        const post_id = this.props.match.params.post_id;
        if (!this.props.post) {
            this.getPost(post_id);
            this.getCommentsForPost(post_id);
        } else {
            this.setState({
                post: this.props.post,
                comments: this.props.comments,
                user: this.props.user,
            });
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = Number(ownProps.match.params.post_id);

    const post = state.posts.find(post => post.id === id);
    const comments = state.comments.filter(comment => comment.postId === id);
    const user = state.users.find(user => {
        return user.id === post.userId;
    });

    return {
        post,
        comments,
        user,
    }
};

export default connect(mapStateToProps)(Post)