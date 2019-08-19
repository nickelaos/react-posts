const initState = {
    posts: [],
    comments: [],
    users: [],
};


const rootReducer = (state = initState, action) => {

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }

    if (action.type === 'SET_POSTS') {
        let posts = action.posts;
        return {
            ...state,
            posts
        }
    }

    if (action.type === 'SET_COMMENTS') {
        let comments = action.comments;
        return {
            ...state,
            comments
        }
    }

    if (action.type === 'SET_USERS') {
        let users = action.users;
        return {
            ...state,
            users
        }
    }

    return state;
}

export default rootReducer