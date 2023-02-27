import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TeamItemHomePage from '../components/TeamItemHomePage'
import Spinner from '../components/Spinner'
import {getTeams} from '../features/teams/teamSlice'

function TopFiveTeams() {

    const dispatch = useDispatch()
    const {teams} = useSelector((state) => state.teams)

    const {isLoading, isSuccess} = useSelector((state) => state.teams)

    useEffect(() => {
        return () => {
            dispatch(getTeams())
            
        }
    }, [dispatch, isSuccess])

    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...teams].sort((a, b) =>
    a.likes.length > b.likes.length ? 1 : -1,
    ).reverse();
    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <>
                <div style={{marginBottom:"20px"}}>
                    <h1>TOP 5 TEAMS OF ALL TIMES</h1>
                </div>
                <div className="tickets">
                    
                    {strAscending.slice(0,5).map((team) => (
                        <TeamItemHomePage key={team._id} team={team}/>
                    ))}
                </div>
                </>             
        </div>
    )
}

export default TopFiveTeams