import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPosts, setComments, setUsers} from '../actions/postActions'
import axios from 'axios'
import Pagination from './templates/Pagination'
import PageTitle from './templates/PageTitle'

class Home extends Component {

    state = {
        currentPage: 1,
        postsPerPage: 15,
    };

    // Change page
    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    };

    render() {
        const {posts} = this.props;

        // Slice current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

        const postList = currentPosts.length ? (
            currentPosts.map(post => {
                return (
                    <div className="card-wrapper col-12 col-md-6 col-lg-4" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <Link to={'/posts/' + post.id} className="text-white">
                                <div className="card-footer bg-dark">
                                    <div className="text-center">Read More...</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className="mx-auto">No posts to show</p>
        );

        return (
            <div>
                <div className="container" id="home">
                    <PageTitle title="Blog Posts"/>
                    <div className="row row-no-padding" id="posts">
                        {postList}
                    </div>
                    <div className="row row-no-padding">
                        <Pagination
                            postsPerPage={this.state.postsPerPage}
                            totalPosts={this.props.posts.length}
                            currentPage={this.state.currentPage}
                            paginate={this.paginate}
                        />
                    </div>
                </div>
            </div>
        )
    }

    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                const posts = res.data;
                this.props.setPosts(posts);
            })
    };

    getComments = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then(res => {
                const comments = res.data; // temporal
                this.props.setComments(comments);
            })
    };

    getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(res => {
                const users = res.data;
                this.props.setUsers(users);
            })
    };

    componentDidMount() {

        if (!this.props.posts.length) {
            this.getPosts();
        }

        if (!this.props.comments.length) {
            this.getComments();
        }

        if (!this.props.users.length) {
            this.getUsers();
        }

    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
        users: state.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => dispatch(setPosts(posts)),
        setComments: (comments) => dispatch(setComments(comments)),
        setUsers: (users) => dispatch(setUsers(users)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)