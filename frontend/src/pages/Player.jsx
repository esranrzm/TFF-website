import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom'
import {getPlayer} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'


function Player() {
    const {player } = useSelector((state) => state.players)

    
    const dispatch = useDispatch()
    const {playerId} = useParams()
   
    useEffect(() => {

        dispatch(getPlayer(playerId)).unwrap().catch(toast.error)

    }, [dispatch, playerId])

    if(!player) {
        return <Spinner />
    }

    return <div className='ticket-page'>
        <header className="ticket-header">
            <h2>
                Player ID: {playerId}
            </h2>
            <h3>
                Date Submitted: {new Date(player.createdAt).toLocaleString('en-US')}
            </h3>
            <hr /><div className="ticket-desc">
                <h3>Team Name</h3>
                <p>{player.fullName}</p>
            </div>
        </header>
    </div>
}

export default Player