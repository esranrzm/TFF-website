import {useState} from 'react'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import { deletePlayer } from '../features/players/playerSlice'
import {useNavigate} from 'react-router-dom'
import {getHistoric} from '../features/historics/historicSlice'
import { useEffect } from 'react'




function MainPagePlayerItem({player}) {
    const dispatch = useDispatch()

    const [FullName] = useState(player.fullName)
    const [Team] = useState(player.team)
    const [player_id] = useState(player._id)
    const [Position] = useState(player.position)
    const [Rating] = useState(player.raiting)
    const [DateOfBirth] = useState(player.DateOfBirth)
    const [PreferedFoot] = useState(player.PreferedFoot)
    const [Age] = useState(player.Age)
    const [PlaceOfBirth] = useState(player.PlaceOfBirth)
    const [personel] = useState(player.personel)
    const navigate = useNavigate()

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
                <form onSubmit={handleViewPlayerInfo}>
               <button className='btn btn-danger'>
                    view player
               </button>
            </form>
            </div>
        </div>
    )
}

export default MainPagePlayerItem