import axios from 'axios'

// const API_URL = '/api/teams/'

// create new team
const createTeam = async (teamData, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    console.log('teamservice', teamData)
    const response = await axios.post('/api/teams/', teamData)

    return response.data
}

// get user teams
const getTeams = async (token) => {

    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }

    const response = await axios.get('/api/teams/')
    //console.log(response.data)

    return response.data
}

// get user team
const getTeam = async (teamId, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    //console.log('teamservice: ' + teamId)
    const response = await axios.get('/api/teams/' + teamId)
    //console.log(response.data)

    
    return response.data
}

// get user team
const getMyTeams = async (getTeam, token) => {
    const config = {
        headers: {
            Authorization: `user ${token}`
        }
    }
    //console.log('teamservice: ' + getTeam)
    const response = await axios.get('/api/teams/', {user: getTeam.user_id})
    //console.log(response.data)

    
    return response.data
}


// delete team
const deleteTeam = async (teamData) => {

    const response = await axios.delete('/api/teams/' + teamData)

    if(response.data) {
        localStorage.setItem('team', JSON.stringify(response.data))
    }
    
    return response.data
    
}

// update team likes
const updateTeam = async (sentData) => {

    const response = await axios.put('/api/teams/' + sentData.team_id, sentData)
    //console.log("response", response.data)

    if(response.data) {
        localStorage.setItem('team', JSON.stringify(response.data))
    }
    
    
    return response.data
    
}




const teamService = {
    createTeam,
    getTeams,
    deleteTeam,
    getTeam,
    getMyTeams,
    updateTeam,
}

export default teamService