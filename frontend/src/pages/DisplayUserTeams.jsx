import {useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { useParams} from 'react-router-dom'
import { getTeam } from '../features/teams/teamSlice'


function DisplayTeam() {

    const dispatch = useDispatch()
    const {state} = useLocation();
    const {team } = useSelector((state) => state.teams)

    const [id] = useState(team._id)
    

    const {teamId, teamname, player1, player2, player3, player4,
        player5, player6, player7, player8, player9, player10, player11, likes} = state
    //const [currentteam] = dispatch(getTeam(user_id))


    return (
        <div className="tickets">
            <div className="ticket-headings">
            <div className="left-panel box">
                    Team Name:
                </div>
                <div className="left-panel box">
                    {teamname}
                </div>
                <div className="right-panel box">
                    Team ID:
                </div>
                
                <div className="right-panel box">
                    {teamId}
                </div>
                <div></div>
                <div className="right-panel box">
                    Likes: {likes.length}
                </div>
                
                
                <div></div>
                
                
            </div>
            <div className="ticket-headings">
                <div className="left-panel box">
                    
                </div>
                <div className="left-panel box">
                    
                </div>
                <div className="left-panel box">
                    
                </div>

                <div className="left-panel box">
                        Players
                    </div>
                </div>
            
            <div className="right-panel box">
                    player 1: {player1}
            </div>
            <div className="right-panel box">
                    player 2: {player2}
            </div>
            <div className="right-panel box">
                    player 3: {player3}
            </div>
            <div className="right-panel box">
                    player 4: {player4}
            </div>
            <div className="right-panel box">
                    player 5:{player5}
            </div>
            <div className="right-panel box">
                    player 6:{player6}
            </div>
            <div className="right-panel box">
                    player 7:{player7}
            </div>
            <div className="right-panel box">
                    player 8:{player8}
            </div>
            <div className="right-panel box">
                    player 9:{player9}
            </div>
            <div className="right-panel box">
                    player 10:{player10}
            </div>
            <div className="right-panel box">
                    player 11:{player11}
            </div>
            
        </div>
    )
}

export default DisplayTeam