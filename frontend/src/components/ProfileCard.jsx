import { MDBBtn } from 'mdb-react-ui-kit';
// import Sonnet from '../../components/Sonnet';
import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import{useNavigate} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function ProfileCard() {

    const {user} = useSelector( (state) => state.auth)
    const navigate = useNavigate()
    const editPage = navigate('/edit')

  return (
    <section className="w-auto p-1" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="w-auto p-1">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4 mb-lg-4">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-5">
                <MDBCol md="4" className="gradient-custom text-center text-white" 
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#D32F2F'}}>
                   
                  <MDBTypography tag="h5">{user.name}</MDBTypography>
                  <MDBCardText>verified ✓</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography style={{textAlign:'center'}} tag="h3">User Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      
                      <MDBCol size="6" className="mb-6">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText style={{marginBottom:'20px'}} className="text-muted">{user.name}</MDBCardText>
                      </MDBCol>
                      
                      {/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">{user.username}</MDBCardText>
                      </MDBCol> */}
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="10" className="mb-1">
                      
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}