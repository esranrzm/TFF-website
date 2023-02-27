import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTeam } from '../features/teams/teamSlice'
/**
 * In this function there are two importnt functionality
 * A team can be deleted by clicking delete button
 * The details of a team can be see by clicking view team button
 * @param {object} team 
 * @returns the list of team items inside a specific card template
 */
function TeamItem({team}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [teamId] = useState(team._id)
    const [name] = useState(team.teamName)
    const [player1] = useState(team.player1)
    const [player2] = useState(team.player2)
    const [player3] = useState(team.player3)
    const [player4] = useState(team.player4)
    const [player5] = useState(team.player5)
    const [player6] = useState(team.player6)
    const [player7] = useState(team.player7)
    const [player8] = useState(team.player8)
    const [player9] = useState(team.player9)
    const [player10] = useState(team.player10)
    const [player11] = useState(team.player11)
    const [likes] = useState(team.likes)
    

    const displayTeam = (e) => {
        e.preventDefault()
        

        navigate('/displayTeam', {state:{teamId: teamId, teamname: name, player1: player1, player2: player2, player3: player3,
            player4: player4, player5: player5, player6: player6, player7: player7, player8: player8, player9: player9, 
            player10: player10, player11: player11, likes: likes}});
    }
    const deleteUserTeam = (e) => {
        e.preventDefault()
        dispatch(deleteTeam(teamId))
        window.location.reload(false);
    }


    return (
        <div className="tickets">
            <div className="ticket-headings">
                <div className="left-panel box">
                    {team._id}
                </div>
                <div className="middle-panel box">
                {team.userVerif ? 'TFF Official' : null}
                </div>
                <div className="middle-panel box">
                    {team.teamName}
                </div>
                <div className="right-panel box">
                    {team.createdAt}
                </div>
                <div></div>
                
                <form onSubmit={displayTeam}  >
                    <button className="btn btn-reverse btn-sm">View Team</button>
                </form>
                <form onSubmit={deleteUserTeam}  >
                    <button className="btn btn-reverse btn-sm">Delete Team</button>
                </form>
                
            </div>
        </div>

        
    )
}

export default TeamItem