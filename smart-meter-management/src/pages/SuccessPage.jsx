import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className='min-h-screen flex justify-center flex-col items-center'>
      <img
        src='https://freepngimg.com/save/18343-success-png-image/1200x1200'
        alt=''
        className='w-20 h-20'
      />
      <h1 className='text-4xl my-4'>Payment Sucessful!</h1>
      <Link
        to='/'
        className='py-2 px-4 bg-green-600 rounded-md text-white font-bold'
      >
        Go to Homepage
      </Link>
    </div>
  );
};
export default SuccessPage;
