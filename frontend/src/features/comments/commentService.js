import axios from 'axios'

const createComment = async (commentData, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    console.log('createComment service', commentData)
    const response = await axios.post('/api/comments/', commentData)
    return response.data
}

const getAllComments = async (token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    const response = await axios.get('/api/comments/')
    console.log(response.data)
    return response.data
}

const getComments = async (getComment, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    const response = await axios.get('/api/comments/', {user: getComment.user_id})
    return response.data
}



const commentService = {
    createComment,
    getComments,
    getAllComments,
}

export default commentService