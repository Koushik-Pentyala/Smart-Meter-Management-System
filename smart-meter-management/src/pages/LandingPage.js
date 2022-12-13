import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landingPage.css';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginpage = (event) => {
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <img
        src='/imgs/login.svg'
        className='w-[50%] max-w-[320px]'
        alt='login illustraion'
      />
      <h1 className='text-2xl mt-8'>To navigate inside, click on login</h1>
      <button
        className='block mt-4 px-8 rounded-md py-2 bg-green-600 text-white'
        onClick={handleLoginpage}
      >
        Log in
      </button>
    </div>
  );
};
