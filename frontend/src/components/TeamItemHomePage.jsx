import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaThumbsUp} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { updateLike } from '../features/teams/teamSlice'
import { useDispatch,useSelector } from 'react-redux'
import { format } from 'date-fns'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { FaCheck } from 'react-icons/fa';
/**
 * * This function involves incrementing and decrementing likes
 * Each button press is being checked before incrementing or decrementing the like count
 * so that each user can only like a team post one
 * @param {object} team a team item with all features
 * @returns the list of team items inside a specific card template
 */
function TeamItem({team}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector( (state) => state.auth)

    const [teamId] = useState(team._id)
    const [name] = useState(team.teamName)
    const [verif] = useState(team.userVerif)
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


    const sentData = {
        user_id: user._id,
        team_id: teamId,
        isliked: "no",
    }

    const incrementLike = (e) => {
        e.preventDefault()
        if(team.likes.includes(user._id)) 
        {
            sentData.isliked = "yes"

        }
        else 
        {
            sentData.isliked = "no"
        }
        //console.log(sentData)
        dispatch(updateLike(sentData))
        window.location.reload(false);

    };

    /*
    
                
                
                
               
                <form onSubmit={displayTeam}  >
                    <button className="btn btn-reverse btn-sm">View Team</button>
                </form>  
                <div></div>
                <button
                    className={"btn btn-reverse btn-sm like-button " + (team.likes.includes(user._id) ? "liked" : "")}
                    onClick = {incrementLike}
                >
                    
                like/unlike
                </button>  
                <div> <FaThumbsUp/>  {likes.length}</div>
                <style>
                    {`
                        .like-button {
                            font-size: 1rem;
                            padding: 9px 10px;
                            color:  #585858;
                        }
                        .liked {
                            font-weight: bold;
                            color: #1565c0;
                        }
                    `}
                </style>
     */
    

    const displayTeam = (e) => {
        e.preventDefault()
        

        navigate('/displayTeam', {state:{teamId: teamId, teamname: name, player1: player1, player2: player2, player3: player3,
            player4: player4, player5: player5, player6: player6, player7: player7, player8: player8, player9: player9, 
            player10: player10, player11: player11, likes: likes}});
    }

    return (
        <section className="w-auto p-1" style={{ backgroundColor: '#cdced1' }}>
            <MDBContainer className="w-auto p-1">
                <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="10" className="mb-4 mb-lg-4">
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                    <MDBRow className="g-5">
                        <MDBCol md="4" className="gradient-custom text-center text-white " 
                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#B84949'}}>
                        <div className="d-flex align-items-center"></div>
                        <MDBTypography  tag="h10">Team ID: {teamId}</MDBTypography>
                        <div>
                        
                        <span style={{ fontSize: 'larger' }}>
                        {team.userVerif ? <FaCheck /> : null}
                        {team.userVerif && 'verified user' }</span>
                        </div>
                        </MDBCol>
                        <MDBCol md="8">
                        <MDBCardBody className="p-4">
                            <MDBTypography style={{textAlign:'center'}} tag="h5">team name: {name}</MDBTypography>
                            <div>{team.userVerif ? 'Upcoming Match Starting 11' : null}</div>
                            <div>{team.userVerif ? 'Date of Match: ' : null}</div>
                            <div>{team.userVerif ? format(new Date(team.createdAt), "dd/MM/Y") : null}</div>
                            
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                            
                            <MDBCardImage src={team.userVerif ? 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/tff06.jpg' : 'https://news.virginia.edu/sites/default/files/Header_Soccer.jpg'}  fluid alt='...' 
                                            style={{
                                            width: 350,
                                            height:200,
                                            backgroundColor: "red",
                                            verticalAlign: "center"
                                            
                                            }}
                                />
                                <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            
                            <MDBCol size="10" className="mb-4">
                            </MDBCol>
                            </MDBRow>
                            <MDBCol size="10" className="mb-4">
                                <MDBTypography tag="h10">Posted at: {format(new Date(team.createdAt), "dd/MM/Y")}</MDBTypography>
                            </MDBCol>
                        </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <div className="tickets">
                <div className="ticket-headings">
                    <div></div>
                    <div></div>
                    <form onSubmit={displayTeam}  >
                        <button className="btn btn-reverse btn-sm">View Team</button>
                    </form>
                    
                    <div></div>
                    <button
                        className={"btn btn-reverse btn-sm like-button " + (team.likes.includes(user._id) ? "liked" : "")}
                        onClick = {incrementLike}
                    >
                            
                    <FaThumbsUp />  {likes.length}
                    </button>
                    
                    
                    <style>
                        {`
                            .like-button {
                            font-size: 1rem;
                                padding: 9px 10px;
                                color:  #585858;
                            }
                            .liked {
                                font-weight: bold;
                                color: #1565c0;
                            }
                        `}
                    </style>      
                </div>
            </div>
            <hr class="dotted"/>
                </MDBRow>
            </MDBContainer>
  
    </section>
    
        
    )
}

export default TeamItem