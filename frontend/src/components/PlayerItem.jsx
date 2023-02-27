import {useState} from 'react'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import { deletePlayer } from '../features/players/playerSlice'
import {useNavigate} from 'react-router-dom'
import {getHistoric} from '../features/historics/historicSlice'
import { useEffect } from 'react'


   /**
     * This function takes player object from the MainPagePlayerItem in order to destruct ıbject and take its inside parameters
     * @param {object} player that needs to be destructed to display its parameters.
     */
function PlayerItem({player, navigation}) {


   

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [personel] = useState(player.personel)
    
    const [FullName] = useState(player.fullName)
    const [Team] = useState(player.team)
    const [player_id] = useState(player._id)
    const [Position] = useState(player.position)
    const [Rating] = useState(player.raiting)
    const [DateOfBirth] = useState(player.DateOfBirth)
    const [PreferedFoot] = useState(player.PreferedFoot)
    const [Age] = useState(player.Age)
    const [PlaceOfBirth] = useState(player.PlaceOfBirth)

    const handleDelete = (e) => {
        e.preventDefault()
        toast.error('Account deleted')
        console.log('item: ' + player_id)
        dispatch(deletePlayer(player_id))
        navigate('/players')
        window.location.reload()
    }
    const handleEdit = (e) => {
        e.preventDefault()
        navigate('/editPlayer', {state:{playerId: player_id, playerName: FullName, playerTeam: Team, playerRating: Rating, playerPosition: Position}});
    }

    const playerData = {
        fullName: FullName,
        _id: player_id,
        team: Team,
        position: Position,
        raiting: Rating,
        dob: DateOfBirth,
        foot: PreferedFoot,
        age: Age,
        pob: PlaceOfBirth

    }
    useEffect(() => {
        return () => {
            dispatch(getHistoric(personel))
        }
    }, [dispatch])
    

    const handleViewPlayerInfo = (e) => {
        e.preventDefault()
        //console.log(player_id)
        //console.log("24 line: " + DateOfBirth)
        navigate('/player-profile/:personel', {state: {personel: personel, playerID: player_id, name: FullName, 
            team: Team, pos: Position, Rating: Rating, dob: DateOfBirth, 
            foot: PreferedFoot, age: Age, pob: PlaceOfBirth} })
        //window.location.reload()
    }

    


    return (
        <div className="tickets">
            <div className="ticket-headings">
                <div className="left-panel box">
                    {player.fullName}
                </div>
                <div className="middle-panel box">
                    {player.team}
                </div>
                <div className="right-panel box">
                    {player.position}
                </div>
                <div className="right-panel box">
                    {player.raiting}
                </div>
                <form onSubmit={handleEdit}  >
                    <button className="btn btn-reverse btn-sm">Edit</button>
                </form>
                <form onSubmit={handleDelete}  >
                    <button className="btn btn-reverse btn-sm">Delete</button>
                </form>
                <form onSubmit={handleViewPlayerInfo}  >
                    <button type='details' className="btn btn-reverse btn-sm">Details</button>
                </form>
                
            </div>
        </div>
    )
}

export default PlayerItem