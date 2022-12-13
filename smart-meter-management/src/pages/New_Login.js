import { Button} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyToast from '../services/MyToast';
import { Link } from 'react-router-dom';
import background from "../assets/images/cloud.jpeg";
import "../styles/new_login.css";
import logo from "../assets/images/logo.png"

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
  MDBIcon
}
from 'mdb-react-ui-kit';

const bg_style = {
    
  border: "2px solid black",
  padding: "25px",
  background: "url(${background})",
  backgroundRepeat: "no-repeat",
  backgroundSize: "300px 100px"

}

function New_Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const validEmail = (email) => {
    const regexEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

    return regexEmail.test(email);
  };


  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShowToast(true);
      setToastText('Please enter both fields');
    } else if (!validEmail(email)) {
      setShowToast(true);
      setToastText('Please enter email correctly');
    } else {
      axios
        .post(`/api/auth/login`, {
          email: email,
          password: password,
        })
        .then(async (res) => {
          localStorage.setItem('email', JSON.stringify(email));
          if (res.status === 200) {
            if (res) {
              //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
              localStorage.setItem('id', res?.data?.user?.foundUser?._id);
              localStorage.setItem('email', res?.data?.user?.foundUser?.email);
              if (email === 'myadmin@gmail.com') navigate('/adminhome');
              else navigate('/client/home');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setShowToast(true);
          setToastText('Invalid email/password');
        });
    }
  };

  return (
    <MDBContainer fluid className='p-4 bg_style'  style={{backgroundImage: `url(${background})` }}>

      <MDBRow>

        <MDBCol md='5' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h2 className="my-5 display-4 fw-bold ls-tight px-3" style={{fontSize: "30px"}}>
          Cloud-based IOT and Smart Meter Management System<br />
            {/* <span className="text-primary">for your business</span> */}
          </h2>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)' , fontSize: "17px"}}>
          A smart IOT cloud management platform which supports the management and control of diverse 
IOT stations and meters in smart buildings or a community.
          </p>

        </MDBCol>

        <MDBCol md='6'>
          
          <MDBCard className='my-5'>
          <img src = {logo}  width="90px" height="50px"  alt="logo" style={{ marginLeft:"200px",marginTop:"30px"}}/>

            <MDBCardBody className='p-5'>
              <h3 style={{textAlign: "left" , fontSize :"25px"}}>Sign In to your account</h3>
              

      <br></br>
              <span style={{fontSize : "18px", textALign:'left', padding:"0px", marginBottom:"3px"}}>Username</span>
              <MDBInput style={{width : "400px", marginTop:"6px" ,textAlign:'left'}} wrapperClass='mb-12' 
              name = 'email' required onChange={(e) => { setEmail(e.target.value); }} id='form1'
               type='email' placeholder='username@gmail.com'/>
             
             <span style={{fontSize : "18px", textALign:'left', padding:"0px", marginBottom:"3px"}}>Password</span>

              <MDBInput style={{width : "400px", marginBottom:"10px", marginTop:"6px" ,textAlign:'left'}} wrapperClass='mb-12' 
               id='form1' type='password' placeholder='************' 
              required onChange={(e) => { setPassword(e.target.value); }} name = 'password'/>
              
             <br></br>

              {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}
              <Button style={{width : "400px", backgroundColor:"navy", padding:"0px", margin :"0px"}} className="text-white" type="submit" onClick={login}>Sign In</Button>

              <MyToast show={showToast} handleClose={() => setShowToast(false)}  text={toastText} />


              <div className="d-flex justify-content-between mx-4 mb-4" style={{marginTop : "10px"}}>
              
              <Link to=""><a href="!#">Forgot password?</a></Link>
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

      </MDBRow>

    </MDBContainer>


  );
}

export default New_Login;