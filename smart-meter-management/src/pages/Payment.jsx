import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [values, setValues] = useState({
    card: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const { card, expiry, cvv, name } = values;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      card.length !== 0 ||
      expiry.length !== 0 ||
      cvv.length !== 0 ||
      name.length !== 0
    ) {
      navigate('/success');
    } else {
      alert('Please provide all the values');
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form
        className='w-full max-w-[480px] shadow-2xl rounded-md p-6'
        onSubmit={handleFormSubmit}
      >
        <h1 className='text-2xl mb-2 font-bold'> Add new card </h1>
        <div className='bg-gray-900 h-[1px]'></div>

        <div className='my-3'>
          <label htmlFor='card' className='inline-block mb-2'>
            Card number
          </label>
          <input
            type='text'
            id='card'
            name='card'
            value={values.card}
            onChange={handleInputChange}
            placeholder='Enter card number'
            className='w-full p-2 rounded-md border border-gray-300'
          />
        </div>

        <div className='my-3'>
          <label htmlFor='expiry' className='inline-block mb-2'>
            Expiry Date
          </label>
          <input
            type='text'
            id='expiry'
            name='expiry'
            value={values.expiry}
            onChange={handleInputChange}
            placeholder='09/23'
            className='w-full p-2 rounded-md border border-gray-300'
          />
        </div>

        <div className='my-3'>
          <label htmlFor='cvv' className='inline-block mb-2'>
            CVV
          </label>
          <input
            type='text'
            id='cvv'
            name='cvv'
            value={values.cvv}
            onChange={handleInputChange}
            placeholder='***'
            className='w-full p-2 rounded-md border border-gray-300'
          />
        </div>

        <div className='my-3'>
          <label htmlFor='name' className='inline-block mb-2'>
            Cardholder's name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={values.name}
            onChange={handleInputChange}
            placeholder='Enter card holder"s name'
            className='w-full p-2 rounded-md border border-gray-300'
          />
        </div>

        <div className='my-4'>
          <button className='bg-blue-600 w-full rounded-md text-white p-2'>
            Add Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
