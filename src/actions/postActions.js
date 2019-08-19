export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const setPosts = (posts) => {
  return {
    type: 'SET_POSTS',
    posts
  }
}

export const setComments = (comments) => {
  return {
    type: 'SET_COMMENTS',
    comments
  }
}

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    users
  }
}