import axios from 'axios'

//historicService has been created

// create new player
const createHistoric = async (historicData, token) => {
    //console.log("historicService: line 7")
    
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }
    //console.log("historicService: line 13")
    //console.log("historicService: line 14 " + historicData.playerid  + "boş mu geliyor?")
   
    const response1 = await axios.post('/api/historics/', historicData)
    //console.log(response1.data)
    return response1.data
}



// get user team
const getHistoric = async (personel, token) => {
    const config = {
        headers: {
            Authorization: `admin ${token}`
        }
    }
   

    const response = await axios.get('/api/historics/:' + personel)

    return response.data
}



const historicService = {
    createHistoric,
    getHistoric,
   
    
}

export default historicService