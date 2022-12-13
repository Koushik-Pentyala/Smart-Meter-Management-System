import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../services/adminApi';

const AddUser = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const naviagte = useNavigate();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await addUser(values);
      console.log(res);
      if (res.status === 200) {
        naviagte('/addClients');
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className='p-4 grow flex justify-center items-center'>
      <form
        onSubmit={submitForm}
        className='w-full max-w-[480px] my-8 shadow-md p-4 rounded-md '
      >
        <div className='my-4'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={values.username}
            onChange={handleInputChange}
            className='block border border-gray-300 rounded-md w-full mt-2'
          />
        </div>

        <div className='my-4'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={values.email}
            onChange={handleInputChange}
            className='block border border-gray-300 rounded-md w-full mt-2'
          />
        </div>

        <div className='my-4'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            id='password'
            value={values.password}
            onChange={handleInputChange}
            className='block border border-gray-300 rounded-md w-full mt-2'
          />
        </div>

        <div className='my-4'>
          <button className='text-white font-bold bg-blue-600 px-4 py-2 rounded-md'>
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
