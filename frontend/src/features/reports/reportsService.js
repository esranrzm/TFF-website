import axios from 'axios'

// create reported user 
const createReport = async (userData) => {
    const response = await axios.post('/api/reportedusers/', userData)

    if(response.data) {
        localStorage.setItem('ruser', JSON.stringify(response.data))
    }
    console.log(response.data)
    return response.data
}

// get reported user
const getrUser = async (ruser) => {
    
    const response = await axios.get('/api/reportedusers/' + ruser)
    
    return response.data
}

const getrUsers = async (token) => {

    const response = await axios.get('/api/reportedusers/')
    return response.data
}


// delete reported user
const deleterUser = async (userData) => {
    
    console.log('authservice id delete ' + userData)
    const response = await axios.delete('/api/reportedusers/' + userData)

    if(response.data) {
        localStorage.setItem('ruser', JSON.stringify(response.data))
    }
    
    return response.data
     
}

const reportsService = {
    createReport,
    deleterUser,
    getrUser,
    getrUsers
}

export default reportsService