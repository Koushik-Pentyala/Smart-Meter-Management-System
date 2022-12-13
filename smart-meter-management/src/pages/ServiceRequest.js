import { Button} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyToast from '../services/MyToast';
import { Link } from 'react-router-dom';
// import "../styles/new_login.css";


import {Container, Row,Col} from 'react-bootstrap';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';

const bg_style = {
    
  border: "2px solid black",
  padding: "25px",
  background: "url(${background})",
  backgroundRepeat: "no-repeat",
  backgroundSize: "300px 100px"

}

function ServiceRequest() {

  const [serviceType, setServiceType] = useState('');
  const [serviceDescription, setServiceDesc] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const [flag, setHidden] = useState(true);

  

  const login = (e) => {
    
    e.preventDefault();
    if (!serviceType || !serviceDescription) {
      setShowToast(true);
      setToastText('Please enter both fields');
    } else {
        const usrEmail = localStorage.getItem('email');
        console.log("useremail::::::::" +  usrEmail)
      axios
        .post('http://localhost:3001/api/fan/addService', {
            serviceType: serviceType,
            serviceDescription: serviceDescription,
            userID:usrEmail
        })
        .then(async (res) => {
        //   localStorage.setItem('email', JSON.stringify(email));
        
          if (res.status === 200) {
            if (res) {
                setServiceType('');
                setServiceDesc('');
                setHidden(false);
                setTimeout(() => setHidden(true), 3000);
                
                console.log("succesfully hit")
               
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setShowToast(true);
          setToastText('Some error occured');
        });
    }
  };

  return (
    <MDBContainer fluid className='p-4 bg_style' >

      <MDBRow>

      

        <MDBCol md='6'>
          
          <MDBCard className='my-5'>
         

            <MDBCardBody className='p-5'>
              <h3 style={{fontSize : "30px"}} className = "font-bold bg-yellow-600 rounded-sm  mt-8 mb-4" >Raise a Service Request</h3>
              

      <br></br>
              <span className='font-bold text-white bg-orange-800 rounded-sm p-1 px-4 w-fit  mt-8 mb-4' >Service Type</span>
              
              <MDBInput className='bg-green-100' style={{width : "400px", marginTop:"6px" ,textAlign:'left'}} wrapperClass='mb-8' 
              name = 'serviceType' required onChange={(e) => { setServiceType(e.target.value); }} id='form1'  value={serviceType}
               type='text' placeholder='Fan/Light'/>
             
             <span className='font-bold text-white bg-orange-800 rounded-sm p-1 px-4 w-fit  mt-8 mb-4'>Service Description</span>

              <MDBTextArea className='bg-green-100' style={{width : "400px", height:"150px", marginTop:"8px" ,textAlign:'left', borderRadius:"13px"}} wrapperClass='mb-12' 
               id='form1' type='text' placeholder='  Please describe the request'  value={serviceDescription}
              required onChange={(e) => { setServiceDesc(e.target.value); }} name = 'serviceDescription'/>
              
             <br></br>

              {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}
              <Button className='bg-yellow-600' style={{width : "400px", padding:"0px", margin :"0px", borderRadius:"8px"}} type="submit" onClick={login}>Raise Request</Button>

              <MyToast show={showToast} handleClose={() => setShowToast(false)}  text={toastText} />


              <div className="d-flex justify-content-between mx-4 mb-4" style={{marginTop : "10px"}}>
              
              </div>
              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
        {!flag ? <span style={{fontSize:"24px", color:"#EAAA00"}}>Request Raised Successfully </span> : null}

      </MDBRow>
    </MDBContainer>


  );
}

export default ServiceRequest;