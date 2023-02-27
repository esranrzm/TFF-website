import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaBiohazard} from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {getTeams} from '../features/teams/teamSlice'
import TeamItemHomePage from '../components/TeamItemHomePage'
import { createReport } from '../features/reports/reportsSlice'
import {createComment} from '../features/comments/commentSlice'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
  } from 'mdb-react-ui-kit';

function VisitedProfile() {

    const { user } = useSelector((state) => state.auth)
    const [vrf] = useState(user.verification)
    const dispatch = useDispatch()
    const {teams} = useSelector((state) => state.teams)
    const {isSuccess} = useSelector((state) => state.teams)
    const location = useLocation()
    const [text, setText] = useState()

    const onSubmit = (e) =>{
        e.preventDefault()
        const commentData = {
            user:user._id, commentTo:location.state.email, text
        }
        console.log("commentData",commentData)
        dispatch(createComment(commentData))
    }

    useEffect(() => {
        return () => {
            dispatch(getTeams())
        }
    }, [dispatch, isSuccess])

    const userData= {
        email: location.state.email,
        name: location.state.name
    }

    const reportUser = (e) => {
        e.preventDefault()
        toast.info('User reported')
        dispatch(createReport(userData))
    }

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
                        <MDBCardText className="heading">{location.state.name}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-4 mb-lg-0">
                        <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                                <MDBListGroupItem className="list-group-item d-flex justify-content-center align-items-center">
                                {/* <MDBIcon className="fas fa-user-alt"></MDBIcon> */}
                                <MDBCardText > {"\u00a0\u00a0"} {location.state.verification ? <FaCheck /> : <MDBIcon className="fas fa-user-alt"></MDBIcon>}
                                    {"\u00a0\u00a0"} {location.state.verification ? 'verified user':'normal user' }</MDBCardText >
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                {/* ///////////////////////////////////////////comment part */}
                <MDBContainer className="card-body p-0" style={{marginTop:'30px'}}>
                <MDBRow>
                    <MDBCol style={{width:'100%'}}>
                        <MDBCard
                            className="shadow-0 border"
                            style={{ backgroundColor: 'white' }}
                        >
                            <MDBCardBody>
                            <form onSubmit={onSubmit}>
                                <MDBInput wrapperClass="mb-4" label={"Comment to " +location.state.name} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                                <button className='btn btn-reverse' style={{marginBottom:'30px', marginLeft:"36%"}}>Comment</button>
                            </form>
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                <p>Type your note, and hit enter to add it</p>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                    <p className="small mb-0 ms-2">Martha</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                    <div>
                                        <FaBiohazard style={{marginLeft:"8px"}} onClick={reportUser}/>
                                    </div>
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                <p>Type your note, and hit enter to add it</p>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                    <p className="small mb-0 ms-2">Mary Kate</p>
                                    </div>
                                    <div>
                                        <FaBiohazard style={{marginLeft:"8px"}} onClick={reportUser}/>
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
    
                <MDBRow>
                    <MDBCol lg="12">
                    <div className="tickets" style={{marginTop:"30px", display:"flex", alignContent:"center", justifyContent:"center"}}>
                            <div/>
                            <div/>
                            <div/>
                            <form onSubmit={reportUser}>
                                <button className="btn btn-reverse btn-sm"><FaBiohazard/>Report</button>
                            </form>
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
                    </MDBCol>
                </MDBRow>
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>USERNAME:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{location.state.name}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>E-MAIL:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{location.state.email}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBRow>
                    <MDBCol md="15">
                    <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                    <MDBCardText className="mb-4 fw-bold">MOST LIKED TEAM OF <span className="text-uppercase fw-bold">{location.state.name}</span></MDBCardText>
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

export default VisitedProfile