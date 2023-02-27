import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { editPlayer } from '../features/players/playerSlice'

function EditPlayer() {

    const dispatch = useDispatch()
    const {state} = useLocation();

    const {playerId, playerName, playerTeam, playerRating, playerPosition} = state
    
    const [name, setName] = useState(playerName)
    const [team, setTeam] = useState(playerTeam)
    const [rating, setRating] = useState(playerRating)
    const [position, setPosition] = useState(playerPosition)
    
    const playerData = {
        fullName: name,
        team: team,
        raiting: rating,
        position: position,
        id: playerId
    }

    const handleEdit = (e) => {
        e.preventDefault()
        toast.info('Player Profile edited')

        dispatch(editPlayer(playerData))
        window.location.reload()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Player Profile
                </h1>
                
            </section>

            <section className="form">
                <form onSubmit={handleEdit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='name'
                        //value={playerName}
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        placeholder={name}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='team'
                        //value={playerTeam}
                        name='team'
                        onChange={(e) => setTeam(e.target.value)}
                        placeholder={team}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='rating'
                        //value={playerRating}
                        name='rating'
                        onChange={(e) => setRating(e.target.value)}
                        placeholder={rating}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='position'
                        //value={playerPosition}
                        name='position'
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder={position}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Edit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditPlayer