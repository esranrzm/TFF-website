
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../components/Spinner'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react'

import historicService from '../features/historics/historicService'

import { useLocation } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import HistoricDataItem from '../components/HistoricDataItem'


/**
 * from state (line 23) player object has been taken. Then, each paramter has been put to the relevant location from table.
 */
function PlayerProfile() {
 
    const {players, isLoading, isSuccess} = useSelector((state) => state.players || {})

    
    
    const dispatch = useDispatch()

    const[storage, getStorage] = useState([])

    const firstValue = Object.values(storage)[0];
    const obj = [{ name: 'John', age: 30, city: 'New York' }];
    const obj1 = storage[0];
    const {state} = useLocation();
    const {personel, name, team, pos, Rating, dob, foot, age, pob } = state; // Read values passed on state

    useEffect(() => {
        return async () => {
            getStorage( await historicService.getHistoric(personel))
            //minor changes
        }
    }, [dispatch, isSuccess])

    console.log('INCOMING POPULATED DATA '+ JSON.stringify(obj1))
    //console.log('line 37, '+ JSON.stringify(storage.gk_SaveRatio))
    
    
    if(isLoading){
        return <Spinner />
    }
   
    console.log("LINE 28, WHAT IS THE TYPE OF TEAMS: " + typeof(storage))


    return (
        <>
            
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-80">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://media.istockphoto.com/id/1300845620/tr/vekt%C3%B6r/kullan%C4%B1c%C4%B1-simgesi-d%C3%BCz-beyaz-arka-plan-%C3%BCzerinde-izole-kullan%C4%B1c%C4%B1-sembol%C3%BC-vekt%C3%B6r-ill%C3%BCstrasyonu.jpg?s=612x612&w=0&k=20&c=BapxTLg8R3jjWnvaSXeHqgtou_-FcyBKmAkUsgwQzxU="
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">{name}</MDBTypography>
                                    <MDBCardText>{pos}</MDBCardText>                               
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Players Personel Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Date of Birth</MDBTypography>
                                            <MDBCardText className="text-muted">{dob}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Place of Birth</MDBTypography>
                                            <MDBCardText className="text-muted">{pob}</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                    
                                        
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Prefered Foot</MDBTypography>
                                            <MDBCardText className="text-muted">{foot}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Age</MDBTypography>
                                            <MDBCardText className="text-muted">{age}</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br />
            <hr className="solid" />

            <h2>PLAYERS RECENT HISTORY</h2>

            <div>
            {obj.map(sto => {
                return pos === 'gk' ? (
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">DATE</th>
                            <th scope="col">Save Ratio (%)</th>
                            <th scope="col">Clean Sheets</th>
                            <th scope="col">Runs Out</th>
                            <th scope="col">Monthly Games</th>
                            <th scope="col">Monthly Rating</th>
                            </tr>
                        </thead>
                    </table>

                    
                    ) : pos === 'def' ? (
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">DATE</th>
                            <th scope="col">Tackle</th>
                            <th scope="col">Interception</th>
                            <th scope="col">Clearence</th>
                            <th scope="col">Monthly Games</th>
                            <th scope="col">Monthly Rating</th>
                            </tr>
                        </thead>
                    </table>

                    ) : pos === 'mid' ? (
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">DATE</th>
                            <th scope="col">Accurate Pass (%)</th>
                            <th scope="col">Assists</th>
                            <th scope="col">Key Passes</th>
                            <th scope="col">Monthly Games</th>
                            <th scope="col">Monthly Rating</th>
                            </tr>
                        </thead>
                    </table>
                    
                    ) :
                    (
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">DATE</th>
                            <th scope="col">Number of Goals</th>
                            <th scope="col">Expected Goals (%)</th>
                            <th scope="col">Shoots on Target (%)</th>
                            <th scope="col">Monthly Games</th>
                            <th scope="col">Monthly Rating</th>
                            </tr>
                        </thead>
                    </table>

                    );
                })}
               
            </div>


            
                {storage.map(sto => {
                    return pos === 'gk' ? (
                    <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row" style={{maxWidth:"40px"}}>{sto.date}</th>
                            <th  >{sto.gk_saveRatio}</th>
                            <th>{sto.gk_cleanSheets}</th>
                            <th>{sto.gk_RunsOut}</th>
                            <th>{sto.monthlyGame}</th> 
                            <th>{Rating}</th> 
                            </tr>
                        </tbody> 
                    </table>

                    
                    ) : pos === 'def' ? (
                        <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row" style={{maxWidth:"40px"}}>{sto.date}</th>
                            <th>{sto.def_tackle}</th>
                            <th>{sto.def_interception}</th>
                            <th>{sto.def_clearence}</th>
                            <th>{sto.monthlyGame}</th> 
                            <th>{Rating}</th> 
                            </tr>
                        </tbody> 
                    </table>

                    ) : pos === 'mid' ? (
                    <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row" style={{maxWidth:"40px"}}>{sto.date}</th>
                            <th>{sto.mid_accPassRatio}</th>
                            <th>{sto.mid_assists}</th>
                            <th>{sto.mid_keyPasses}</th>
                            <th>{sto.monthlyGame}</th> 
                            <th>{Rating}</th> 
                            </tr>
                        </tbody> 
                    </table>
                    ) :
                    (
                    <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row" style={{maxWidth:"40px"}}>{sto.date}</th>
                            <th cope="row">{sto.att_numOfGoals}</th>
                            <th>{sto.att_expectedGoalsRatio}</th>
                            <th>{sto.att_shootsOnTargetRatio}</th>
                            <th>{sto.monthlyGame}</th> 
                            <th>{Rating}</th> 
                            </tr>
                        </tbody> 
                    </table>

                    );
                })}
               
            
        </>

            
            
        
    );
}

export default PlayerProfile