import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPlayers} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import PlayerItem from '../components/PlayerItem'

/**
 * Represents players list.
 */
function Players() {
    const {players, isLoadingP, isSuccessP} = useSelector((state) => state.players)
  

   
    
    const playerList={
        name: players.fullName,
        team: players.team
    }

    console.log(playerList)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getPlayers())
        }
    }, [dispatch, isSuccessP])

    console.log("LINE 28, WHAT OS THE TYO OF TEAMS: " + JSON.stringify(players))


    if(isLoadingP) {
        return <Spinner />
    }

    return (
        <>
            <h1>PLAYERS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                    <div>Name</div>
                    <div>Team</div>
                    <div>Position</div>
                    <div>Rating</div>
                    <div></div>
                    <div>Action</div>
                    
                </div>
                
                {players.map((player) => (
                    <PlayerItem key={player._id} player={player}/>
                ))}
               
            </div>
        </>
    )
}

export default Players