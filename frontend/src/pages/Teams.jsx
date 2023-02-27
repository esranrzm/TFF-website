import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getMyTeams, reset,getTeams} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import TeamItem from '../components/TeamItem'


function Teams() {
    const {teams, isLoading} = useSelector((state) => state.teams)
    const {user} = useSelector((state) => state.auth)
    const {team} = useSelector((state) => state.teams)
   // const [user_id] = useState(user._id)

    const dispatch = useDispatch()

    const getTeam = {
        user_id: user._id
    }


    useEffect(() => {
        console.log(getTeam)
        dispatch(getMyTeams(getTeam))
        //dispatch(getTeams())
    }, [dispatch])

    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1>TEAMS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                    <div>Team ID</div>
                    <div></div>
                    <div>Team Name</div>
                    <div>Created At</div>
                    <div></div>
                    <div></div>
                    <div>Action</div>
                    
                </div>
                
                {teams.map((team) => (
                    <TeamItem key={team._id} team={team}/>))}
            </div>
    
        </>
    )
}

export default Teams