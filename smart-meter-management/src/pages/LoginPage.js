import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyToast from '../services/MyToast';

export const LoginPage = () => {
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
        .post('http://localhost:3001/api/auth/login', {
          email: email,
          password: password,
        })
        .then(async (res) => {
          localStorage.setItem('email', JSON.stringify(email));
          if (res.status === 200) {
            if (res) {
              //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
              localStorage.setItem('email', res?.data?.user?.foundUser?.email);
              localStorage.setItem('id', res?.data?.user?.foundUser?._id);

              if (email === 'admin@gmail.com') navigate('/adminhome');
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
    <div className='tab-content'>
      <div className='tab-pane fade show active'>
        <form className='p-4 max-w-[600px] m-auto'>
          <h2 className='text-3xl font-bold my-4'>Sign in to us</h2>
          <div className='my-4'>
            <label>Username or email address</label>
            <input
              type='email'
              name='email'
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='w-full border text-left'
            />
          </div>

          <div className='my-4'>
            <label>Password</label>
            <input
              className='w-full border text-left'
              type='password'
              name='password'
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className='my-4'>
            <button
              className='w-fit p-2 px-4 m-0  bg-blue-600 text-white'
              type='submit'
              onClick={login}
            >
              Login
            </button>{' '}
          </div>
          <a href='#!'>Forget password?</a>

          <MyToast
            show={showToast}
            handleClose={() => setShowToast(false)}
            text={toastText}
          />
        </form>
      </div>
    </div>
  );
};
