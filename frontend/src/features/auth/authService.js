import axios from 'axios'


// const API_URL = '/api/users/'

//get user
const getUser = async (userID, token) => {
    // const config = {
    //     headers: {
    //         Authorization: `user ${token}`
    //     }
    // }

    const response = await axios.get('/api/users/' + userID)

    return response.data
}

const getUsers = async (token) => {
    
    // const config = {
    //     headers: {
    //         Authorization: `admin ${token}`
    //     }
    // }
    const response = await axios.get('/api/users/')
    return response.data
}




// register user 
const register = async (userData) => {
    const response = await axios.post('/api/users/', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login user
const login = async (userData) => {
    const response = await axios.post('/api/users/' + 'login' , userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login user
const loginAdmin = async (userData) => {
    const response = await axios.post('/api/users/' + 'adminlogin' , userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// update user
const update = async (userData) => {
    
    const response = await axios.put('/api/users/' + userData.id, {username: userData.username, email: userData.email, verification: userData.verification})
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}


//logout user
const logout = () => localStorage.removeItem('user')

// delete user
const deleteUser = async (userData) => {
    
    console.log('authservice id delete ' + userData)
    const response = await axios.delete('/api/users/' + userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        logout(userData)
    }
    
    return response.data
    
    
}




const authService = {
    register,
    logout,
    login,
    loginAdmin,
    update,
    deleteUser,
    getUser,
    getUsers
}

export default authService