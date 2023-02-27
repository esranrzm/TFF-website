import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import authService from '../features/auth/authService'
import {getTeams} from '../features/teams/teamSlice'
import TeamItemHomePage from '../components/TeamItemHomePage'

 function Home() {

    const {user} = useSelector( (state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedUser] = useState({ name: "", email: "", isAdmin: "", verification: "" })
    
    const [userList, setUserList] =  useState([])
    const [realUserList, setRealUserList] =  useState([])

    const {teams} = useSelector((state) => state.teams)

    const {players, isLoading, isSuccess} = useSelector((state) => state.players)

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
            dispatch(getTeams())
        }
    }, [dispatch, isSuccess])

  useEffect(() => {
    return async () => {
      setUserList(await authService.getUsers() || []);
      removeCurrentUser(userList, "email", user.email)
    }
},)

var removeCurrentUser = function(userList, key, value){
    var i = userList.length;
    while(i--){
       if( userList[i] 
           && userList[i].hasOwnProperty(key) 
           && (arguments.length > 2 && userList[i][key] === value ) ){ 
           userList.splice(i,1);
       }
    }
    return setRealUserList(userList)
}

    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...players].sort((a, b) =>
    a.raiting > b.raiting ? 1 : -1,
    ).reverse();
    

    if(isLoading) {
        return <Spinner />
    }
    
        const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log("handle on search: " + string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log("handle on hover:  " + result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        selectedUser.email = item.email
        selectedUser.name = item.name
        selectedUser.verification = item.verification
        selectedUser.isAdmin = item.isAdmin
        navigate("/visitedProfile", {state:{name:selectedUser.name, email:selectedUser.email, isAdmin:selectedUser.isAdmin, verification:selectedUser.verification}})
      }
      
      const handleOnFocus = () => {
        console.log('Focused')
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }

    return (
        <div>
            {user ? 
            (            
                <>
                <div className="search-box" style={{zIndex:"2"}}>
                <header className="search-box-header">
                    <div style={{ width: 400, marginBottom:"20px", zIndex:"2" }}>
                    <ReactSearchAutocomplete
                        items={realUserList}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                    </div>
                </header>
                </div>
                <div style={{zIndex:"1"}}>
                <div class="btn-group" style={{marginRight:"20px"}}>
                    <Link to='/viewAllPlayers'>
                        <button >View all players</button>
                    </Link>
                </div>
                <div class="btn-group" style={{marginRight:"20px"}}>
                    <Link to='/new-team'>
                        <button >Create your team</button>
                    </Link>
                </div>
                <div class="btn-group" style={{marginRight:"20px"}}>
                    <Link to='/teams'>
                        <button >View your team</button>
                    </Link>
                </div>
                <div class="btn-group" style={{marginRight:"20px"}}>
                    <Link to='/topFiveTeams'>
                        <button type='top5' >Top 5 teams</button>
                    </Link>
                </div>
                </div>
                <hr class="solid" style={{marginTop:"20px"}}></hr>
                <br/>
                
                <div>
                {teams.map((team) => (
                    <TeamItemHomePage key={team._id} team={team}/>))}
                </div>
                </>
            )
            : 
            (
                <>
                <div style={{marginBottom:"20px"}}>
                    <h1>TOP 5 PLAYERS OF THE MONTH</h1>
                </div>
                <div className="tickets">
                    <div className="ticket-headings">
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                    </div>
                    {strAscending.slice(0,5).map((player) => (
                        <MainPagePlayerItem key={player._id} player={player}/>
                    ))}
                </div>
                </>
            )
            }             
        </div>
    )
}
export default Home