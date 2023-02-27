import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {getTeams} from '../features/teams/teamSlice'
import TeamItemHomePage from '../components/TeamItemHomePage'
import { FaCheck } from 'react-icons/fa';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

function Profile() {
    
    const { user } = useSelector((state) => state.auth)
    const [username] = useState(user.name)
    const [vrf] = useState(user.verification)
    const dispatch = useDispatch()
    const {teams} = useSelector((state) => state.teams)
    const {isLoading, isSuccess} = useSelector((state) => state.teams)
    useEffect(() => {
        return () => {
            dispatch(getTeams())

        }
    }, [dispatch, isSuccess])

    const strAscending = [...teams].sort((a, b) =>
    a.likes.length > b.likes.length ? 1 : -1,
    ).reverse();

    return (
        console.log(vrf),
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                 <MDBCol lg="4">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                        <MDBCardText className="heading">{username}</MDBCardText>
                        <Link to='/new-team' className='btn btn-block'>
                         <FaTicketAlt /> Create New Team
                        </Link>

                        <Link to='/teams' className='btn btn-block'>
                            <FaTicketAlt /> View All Teams
                        </Link>
                        <Link to='/profilesettings' className='btn btn-block'>
                            <FaTicketAlt /> Profile Settings
                        </Link>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-4 mb-lg-0">
                        <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                                
                                <MDBListGroupItem className="list-group-item d-flex justify-content-center align-items-center">
                                {/* <MDBIcon className="fas fa-user-alt"></MDBIcon> */}
                                    <MDBCardText > {"\u00a0\u00a0"} {user.verification ? <FaCheck /> : <MDBIcon className="fas fa-user-alt"></MDBIcon>}
                                    {"\u00a0\u00a0"} {user.verification ? 'verified user':'normal user' }
                                    
                                    
                                    </MDBCardText>
                                    
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>USERNAME:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{username}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>E-MAIL:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBRow>
                    <MDBCol md="15">
                    <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                    <MDBCardText className="mb-4 fw-bold">MOST LIKED TEAM OF <span className="text-uppercase fw-bold">{username}</span></MDBCardText>
                        <div className="tickets">

                            {strAscending.slice(0,1).map((team) => (
                                <TeamItemHomePage key={team._id} team={team}/>
                            ))}
                        </div>
                        </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
             </MDBRow>
        </MDBContainer>
        </section>
        
    )
}

export default Profile