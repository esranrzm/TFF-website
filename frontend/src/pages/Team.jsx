import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom'
import {getTeam} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'


function Team() {
    const {team } = useSelector((state) => state.teams)

    
    const dispatch = useDispatch()
    const {teamId} = useParams()
   
    useEffect(() => {

        dispatch(getTeam(teamId)).unwrap().catch(toast.error)

    }, [dispatch, teamId])

    if(!team) {
        return <Spinner />
    }

    return <div className='ticket-page'>
        <header className="ticket-header">
            <h2>
                Team ID: {team._id}
            </h2>
            <h3>
                Date Submitted: {new Date(team.createdAt).toLocaleString('en-US')}
            </h3>
            <hr /><div className="ticket-desc">
                <h3>Team Name</h3>
                <p>{team.teamName}</p>
            </div>
        </header>
    </div>
}

export default Team